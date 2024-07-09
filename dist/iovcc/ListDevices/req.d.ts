export interface ListDevicesRequest {
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 设备型号ID
     * @example `10`
     */
    "DeviceModelId"?: number;
    /**
     * 设备型号名，支持模糊查询
     * @example `ROEWE RX5	`
     */
    "DeviceModel"?: string;
    /**
     * 返回结果列表起始位置
     * @example `1`
     */
    "Start"?: string;
    /**
     * 返回结果列表最大长度
     * @example `20`
     */
    "Length"?: string;
}
