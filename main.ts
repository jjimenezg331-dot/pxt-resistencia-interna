namespace pins {
    /**
     * Establece la resistencia interna de un pin digital.
     * @param pin pin digital que se configurará
     * @param modo tipo de resistencia interna
     */
    //% blockId=establecer_resistencia_interna
    //% block="establecer resistencia interna en pin $pin a $modo"
    //% pin.shadow=digital_pin_shadow
    //% pin.defl=DigitalPin.P0
    //% modo.defl=PinPullMode.PullDown
    //% advanced=true
    //% weight=14
    export function establecerResistenciaInterna(
        pin: DigitalPin,
        modo: PinPullMode
    ): void {
        pins.setPull(pin, modo)
    }
}