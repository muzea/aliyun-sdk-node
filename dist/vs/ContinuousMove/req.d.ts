export interface ContinuousMoveRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 水平转动速度参数，正值表示向左水平转动。
     * 取值：-1.0~1.0
     * @example `0.5`
     */
    "Pan"?: string;
    /**
     * 垂直转动速度参数，正值表示向上水平转动。
     * 取值：-1.0~1.0
     * @example `0.5`
     */
    "Tilt"?: string;
    /**
     * 缩放速度参数，正值表示放大。
     * 取值：-1.0~1.0
     * @example `0.5`
     */
    "Zoom"?: string;
}
