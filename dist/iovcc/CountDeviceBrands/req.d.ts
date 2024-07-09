export interface CountDeviceBrandsRequest {
    /**
     * 查询的设备品牌ID
     * @example `1`
     */
    "DeviceBrandId"?: number;
    /**
     * 查询的设备品牌名称
     * @example `Tmall`
     */
    "DeviceBrand"?: string;
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
}
