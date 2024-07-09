export interface DoQuickFieldRequest {
    /**
     * 索引字段。
     * @example `alert_level`
     */
    "Index": string;
    /**
     * 查询分析的开始时间点，Unix时间戳格式，精确到秒。
     * @example `1684376244`
     */
    "From": number;
    /**
     * 查询分析的结束时间点，Unix时间戳格式，精确到秒。
     * @example `1684378090`
     */
    "To": number;
    /**
     * 快速分析结果较多时的进行分页，默认为1。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 快速分析结果较多时每页的展示的数量，默认为10。
     * @example `10`
     */
    "Size"?: number;
    /**
     * 查询结果排序，默认为降序。
     * @example `true`
     */
    "Reverse"?: boolean;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港，选择该项。
     * - ap-southeast-1：资产属于海外地域，选择该项。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
