export interface StopDeviceRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 流重启触发时间。
     * @example `2021-12-10T10:00:00Z`
     */
    "StartTime"?: string;
}
