export interface BatchStopDevicesRequest {
    /**
     * 设备ID，多值用逗号分隔。
     * @example `32388487****92996`
     */
    "Id": string;
    /**
     * 流重启触发时间。
     * @example `2021-10-14T23:00:00Z`
     */
    "StartTime"?: string;
}
