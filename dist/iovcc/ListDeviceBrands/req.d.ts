export interface ListDeviceBrandsRequest {
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 查询的设备品牌ID。
     * @example `1`
     */
    "DeviceBrandId"?: number;
    /**
     * 查询的设备品牌名称，支持模糊查询。
     * @example `Tmall`
     */
    "DeviceBrand"?: string;
    /**
     * 返回列表起始位置。
     * @example `10`
     */
    "Start"?: string;
    /**
     * 最多返回记录条数。
     * @example `20`
     */
    "Length"?: string;
}
