export interface QueryMetricByPageRequest {
    /**
     * 数据片的时间间隔，单位为毫秒，最小值为60000。
     * @example `100000`
     */
    "IntervalInSec"?: number;
    /**
     * 起始时间的时间戳，精确到毫秒。
     * @example `1667287695000`
     */
    "StartTime": number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1667546895000`
     */
    "EndTime": number;
    /**
     * 排序依据，可设为任一测量数据。
     * @example `pid`
     */
    "OrderBy"?: string;
    /**
     * 需要查询的指标，不可自定义输入，请参见下文补充说明。
     * @example `appstat.host`
     */
    "Metric": string;
    /**
     * 排序标准。取值：
     * - `ASC`：升序。
     * - `DESC`：降序。
     * > 不填则不排序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 查询结果的页码，默认为`1`。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 此参数已不支持使用。查询结果的每页项目数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 筛选条件组合。
     */
    "Filters"?: {
        /**
         * 筛选条件组合，必须添加`pid`和`regionId`条件。
         * @example `pid`
         */
        Key: string;
        /**
         * 筛选条件组合，必须添加`pid`和`regionId`值，`pid`获取方式，请参见下文补充说明。
         * @example `xxx@74xxx`
         */
        Value: string;
    }[];
    /**
     * 指标对应的维度。
     * @example `["detector_browser","detector_device"]`
     */
    "Dimensions"?: string[];
    /**
     * 指标对应的测量数据。
     * @example `pv`
     */
    "Measures"?: string[];
    /**
     * 自定义过滤条件。
     */
    "CustomFilters"?: string[];
}
