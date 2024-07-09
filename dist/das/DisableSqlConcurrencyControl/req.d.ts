export interface DisableSqlConcurrencyControlRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 实例ID。
     * >仅支持RDS MySQL和PolarDB MySQL版实例。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 当前实例限流规则ID，可调用[GetRunningSqlConcurrencyControlRules](~~223538~~)接口获取。
     * @example `1`
     */
    "ItemId": number;
}
