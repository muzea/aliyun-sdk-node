export interface ListOpaClusterStrategyNewRequest {
    /**
     * 策略名称。
     */
    "StrategyName"?: string[];
    /**
     * 镜像名称列表。
     */
    "ImageName"?: string[];
    /**
     * 标签列表。
     */
    "Label"?: string[];
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
