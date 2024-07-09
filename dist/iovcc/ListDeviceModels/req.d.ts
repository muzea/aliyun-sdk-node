export interface ListDeviceModelsRequest {
    /**
     * 设备型号ID
     * @example `10`
     */
    "DeviceModelId"?: number;
    /**
     * 列表最大长度
     * @example `20`
     */
    "Length"?: string;
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
    /**
     * 列表起始位置
     * @example `1`
     */
    "Start"?: string;
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
    "DeviceBrandId"?: number;
}
