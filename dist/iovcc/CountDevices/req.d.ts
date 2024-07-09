export interface CountDevicesRequest {
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 设备机型ID
     * @example `1`
     */
    "DeviceModelId"?: number;
    /**
     * 设备机型名，支持模糊查询
     * @example `Device Model`
     */
    "DeviceModel"?: string;
}
