/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="ボリューム"
namespace IMLVolume {

    //% block
    //% block="ボリューム %pin"
    //% weight=100   
    export function getVolume(pin: AnalogPin): number {
        return 100-Math.round(pins.analogReadPin(pin) * 100.0 / 1023.0)
    }
}
