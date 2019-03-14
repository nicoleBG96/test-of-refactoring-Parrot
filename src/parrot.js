export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {
    constructor(type, numberOfCoconuts, voltage, isNailed) {

        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        switch (this.type) {
            case PARROT_TYPES.EUROPEAN:
                return this.getSpeedForEuropean();
            case PARROT_TYPES.AFRICAN:
                return this.getSpeedForAfrican();
            case PARROT_TYPES.NORWEGIAN_BLUE:
                return this.getSpeedForNorwegian();
        }
        throw new Error("Should be unreachable");
    }

    getSpeedForEuropean() {
        return this.getBaseSpeed();
    }

    getSpeedForNorwegian() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    getSpeedForAfrican() {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }

    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.getBaseSpeed());
    }

    getLoadFactor() {
        return 9;
    }

    getBaseSpeed() {
        return 12;
    }
}

class African {
    constructor(numberOfCoconuts, voltage, isNailed) {
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }
}