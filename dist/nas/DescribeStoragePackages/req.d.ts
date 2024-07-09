export interface DescribeStoragePackagesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每个分页包含的存储包个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 返回的时间是否按照UTC标准格式表示。
     * 取值：
     * - true（默认值）：返回的时间为UTC标准格式。
     * - false：返回Unix时间戳。
     * @example `true`
     */
    "UseUTCDateTime"?: boolean;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
}
