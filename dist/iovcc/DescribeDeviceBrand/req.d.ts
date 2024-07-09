export interface DescribeDeviceBrandRequest {
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 查询的设备品牌ID，和**DeviceBrand**不能同时为空。
     * @example `1`
     */
    "DeviceBrandId"?: number;
    /**
     * 查询的设备品牌名称，和**DeviceBrandId**不能同时为空。
     * @example `TmallGenius`
     */
    "DeviceBrand"?: string;
    /**
     * 查询列表起始位置。
     * @example `0`
     */
    "Start"?: string;
    /**
     * 查询列表最大长度。
     * @example `20`
     */
    "Length"?: string;
}
