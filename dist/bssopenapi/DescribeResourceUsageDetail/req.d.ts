export interface DescribeResourceUsageDetailRequest {
    /**
     * 格式：yyyy-MM-dd HH:mm:ss； 查询逻辑为包括该时间
     * @example `2021-01-01 00:00:00`
     */
    "StartPeriod": string;
    /**
     * 格式：yyyy-MM-dd HH:mm:ss；查询逻辑为不包括该时间；为空表示截止到当前时间
     * @example `2021-01-02 00:00:00`
     */
    "EndPeriod"?: string;
    /**
     * MONTH：月维度； DAY：天维度； HOUR：小时维度；
     * @example `HOUR`
     */
    "PeriodType": string;
    /**
     * 分页token，首页查询时传空，查询结果中返回下一页token地址。当结果token为空时表示全部查完。
     * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。默认值：20，最大值：300。
     * @example `200`
     */
    "MaxResults"?: number;
    /**
     * 如果为空查询当前账号及其托管子账号的数据，可传入托管子账号ID，明确查询该子账号数据。
     * @example `123745698925000`
     */
    "BillOwnerId"?: number;
    /**
     * RI：预留实例；SCU：存储容量单位包
     * @example `RI`
     */
    "ResourceType": string;
}
