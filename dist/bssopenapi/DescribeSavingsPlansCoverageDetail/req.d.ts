export interface DescribeSavingsPlansCoverageDetailRequest {
    /**
     * 要查询的时间范围的开始。开始时间包含在时​​间范围内。时间格式 yyyy-MM-dd HH:mm:ss。
     * @example `2021-01-01 00:00:00`
     */
    "StartPeriod": string;
    /**
     * 要查询的时间范围的结束时间。不包含结束时间。如果不设置该参数，则结束时间为当前时间。时间格式 yyyy-MM-dd HH:mm:ss。
     * @example `2021-01-01 00:00:00`
     */
    "EndPeriod"?: string;
    /**
     * 查询使用情况摘要的时间粒度。有效值枚举：MONTH、DAY、HOUR。
     * @example `HOUR`
     */
    "PeriodType": string;
    /**
     * 分页token，首页查询时传空，查询结果中返回下一页token地址。当结果token为空时表示全部查完。
     * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9`
     */
    "Token"?: string;
    /**
     * 返回结果的最大个数
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源归属账号的ID，资源归属账号是实际使用资源的账号。
     * @example `123745698925000`
     */
    "BillOwnerId"?: number;
}
