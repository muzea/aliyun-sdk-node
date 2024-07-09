export interface DescribeSystemEventHistogramRequest {
    /**
     * 产品的名称缩写。
     * >关于产品名称缩写的取值，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `OSS`
     */
    "Product"?: string;
    /**
     * 事件类型。
     * >关于事件类型的取值，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `Exception`
     */
    "EventType"?: string;
    /**
     * 事件名称。
     * >关于事件名称的取值，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `BucketIngressBandwidth`
     */
    "Name"?: string;
    /**
     * 事件级别，取值：
     * - CRITICAL：严重
     * - WARN：警告
     * - INFO：信息
     * @example `CRITICAL`
     */
    "Level"?: string;
    /**
     * 事件状态。
     * >关于事件状态的取值，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `normal`
     */
    "Status"?: string;
    /**
     * 应用分组ID。
     * @example `12345`
     */
    "GroupId"?: string;
    /**
     * 搜索事件内容包含的关键字。取值：
     * - 如果您待搜索事件的内容中包括a和b，可以搜索`a and b`。
     * - 如果您待搜索事件的内容中包括a或b，可以搜索`a or b`。
     * @example `cms`
     */
    "SearchKeywords"?: string;
    /**
     * 开始时间。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1552209685596`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1552220485596`
     */
    "EndTime"?: string;
}
