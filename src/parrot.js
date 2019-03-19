export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {
    constructor(type, ) {
        this.baseSpeed = 12;
        this.type = type;
    }

    getSpeed() {
        throw new Error("Should be unreachable");
    }

}

export class African extends Parrot{
    constructor(numberOfCoconuts) {
        super("AFRICAN");
        this.loadFactor = 9;
        this.numberOfCoconuts = numberOfCoconuts;
    }

    getSpeed() {
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}

export class Norwegian_Blue extends Parrot{
    constructor(voltage, isNailed) {
        super("NORWEGIAN");
        this.voltage=voltage;
        this.isNailed=isNailed;
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.baseSpeed);
    }
}

export class European extends Parrot{
    constructor() {
        super("EUROPEAN");
    }

    getSpeed() {
        return this.baseSpeed;
    }
}