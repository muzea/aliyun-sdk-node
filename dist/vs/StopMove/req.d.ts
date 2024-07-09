export interface StopMoveRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 是否停止水平转动，默认false
     * @example `true`
     */
    "Pan"?: boolean;
    /**
     * 是否停止垂直转动，默认false
     * @example `true`
     */
    "Tilt"?: boolean;
    /**
     * 是否停止缩放，默认false
     * @example `true`
     */
    "Zoom"?: boolean;
}
