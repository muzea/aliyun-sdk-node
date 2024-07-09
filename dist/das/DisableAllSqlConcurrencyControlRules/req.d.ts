export interface DisableAllSqlConcurrencyControlRulesRequest {
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
}
