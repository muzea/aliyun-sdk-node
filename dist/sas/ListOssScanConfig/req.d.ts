export interface ListOssScanConfigRequest {
    /**
     * 分页查询，当前显示的页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 策略名称。
     * @example `testName`
     */
    "Name"?: string;
}
