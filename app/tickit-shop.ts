export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality(degrade = 1 as number | Array<number>, perishable = true as boolean) {
        if (!perishable) return;

        let degradeBy = degrade;

        if (degrade instanceof Array) {
            degradeBy = this.findDegradationRate(<Array<number>>degrade);
        }

        if (this.sellIn < 0) {
            degradeBy = <number>degradeBy * 2;
        }

        if (degradeBy === null) {
            this.quality = 0;
        } else {
            this.quality = Math.min(50, Math.max(0, this.quality - <number>degradeBy));
        }
    }

    findDegradationRate(arr = {} as Array<number>) {
        let value = arr[0];
        for (let i = 1; i < arr.length - 1; i += 2) {
            if (this.sellIn > arr[i]) break;
            value = arr[i + 1];
        }
        return value;
    }

    decrSellIn() {
        this.sellIn -= 1;
    }
}

export class TickitShop {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    };

    catalogue = {
        'Sharp Cheddar': { degrade: -1, perishable: true },
        'Ping-pong Paddle': { degrade: 0, perishable: false },
        'Lady Gaga tickets': { degrade: [-1, 10, -2, 5, -3, 0, null], perishable: true },
        'Conjured': { degrade: 2, perishable: true }
    };

    updateQuality() {
        if (!this.items.length) return [];

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            let spec = this.catalogue[item.name];

            if (spec) {
                item.updateQuality(spec.degrade, spec.perishable);
                if (spec.perishable) item.decrSellIn();
            } else {
                item.updateQuality();
                item.decrSellIn();
            }

            this.items[i] = item;
        };

        return this.items;
    }
}
