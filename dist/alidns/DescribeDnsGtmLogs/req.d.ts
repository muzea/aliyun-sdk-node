export interface DescribeDnsGtmLogsRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId": string;
    /**
     * 关键字，按照”%KeyWord%”模式搜索，不区分大小写。
     * @example `demo`
     */
    "Keyword"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 查询的开始时间（时间戳）。
     * @example `1516779348000`
     */
    "StartTimestamp"?: number;
    /**
     * 查询的结束时间（时间戳）。
     * @example `1516779348000`
     */
    "EndTimestamp"?: number;
}
