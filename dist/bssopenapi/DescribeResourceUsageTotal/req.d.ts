export interface DescribeResourceUsageTotalRequest {
    /**
     * 格式：yyyy-MM-dd HH:mm:ss； 查询逻辑为包括该时间，查询对应的时间为开始时间
     * @example `2021-01-01 00:00:00`
     */
    "StartPeriod": string;
    /**
     * 格式：yyyy-MM-dd HH:mm:ss；查询逻辑为不包括该时间；为空表示截止到当前时间，查询对应的时间为结束时间
     * @example `2021-01-02 00:00:00`
     */
    "EndPeriod"?: string;
    /**
     * MONTH：月维度； DAY：天维度； HOUR：小时维度
     * @example `HOUR`
     */
    "PeriodType": string;
    /**
     * 资源归属账号的ID，资源归属账号是实际使用资源的账号；只支持传入1个账号
     * @example `123745698925000`
     */
    "BillOwnerId"?: number;
    /**
     * 资源包类型，枚举值包括RI/SCU；RI：预留实例； SCU：存储容量单位包
     * @example `RI`
     */
    "ResourceType": string;
}
