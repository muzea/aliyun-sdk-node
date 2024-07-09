export interface CountDeviceModelsRequest {
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
     * @example `X1`
     */
    "DeviceModel"?: string;
    /**
     * 设备品牌
     * @example `TmallGenius`
     */
    "DeviceBrand"?: string;
}
