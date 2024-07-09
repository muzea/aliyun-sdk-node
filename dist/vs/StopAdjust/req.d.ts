export interface StopAdjustRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 是否停止调整光圈，默认false
     * @example `true`
     */
    "Iris"?: boolean;
    /**
     * 是否停止调整变焦，默认false
     * @example `true`
     */
    "Focus"?: boolean;
}
