export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {
    constructor(type, numberOfCoconuts, voltage, isNailed) {
        this.loadFactor = 9;
        this.baseSpeed = 12;

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
                return new African(this.numberOfCoconuts, this.voltage, this.isNailed).getSpeed();
            case PARROT_TYPES.NORWEGIAN_BLUE:
                return this.getSpeedForNorwegian();
        }
        throw new Error("Should be unreachable");
    }

    getSpeedForEuropean() {
        return this.baseSpeed;
    }

    getSpeedForNorwegian() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    getSpeedForAfrican() {
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }

    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.baseSpeed);
    }
}

class African {
    constructor(numberOfCoconuts, voltage, isNailed) {
        this.loadFactor = 9;
        this.baseSpeed = 12;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}

class Norwegian_Blue{

}