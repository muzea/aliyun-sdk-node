export interface GetRunningSqlConcurrencyControlRulesRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 实例ID。
     * >仅支持RDS MySQL和 PolarDB MySQL版实例。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页最大记录数，取值大于0且不超过Integer数据类型的最大值，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
