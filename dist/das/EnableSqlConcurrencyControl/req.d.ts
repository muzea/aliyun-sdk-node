export interface EnableSqlConcurrencyControlRequest {
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
     * 选择SQL的类型。取值：
     * - **SELECT**
     * - **UPDATE**
     * - **DELETE**
     * @example `SELECT`
     */
    "SqlType": string;
    /**
     * SQL最大并发数，取值为大于或等于1的整数。
     * >当包含关键词的SQL达到最大并发数时会触发限流规则。
     * @example `3`
     */
    "MaxConcurrency": number;
    /**
     * 需要限流的SQL关键词。
     * >多个关键词间用波浪线（~）分隔，SQL语句中需要同时包含这些关键词才会触发限流规则。
     * @example `call~open~api~test~4~from~POP`
     */
    "SqlKeywords": string;
    /**
     * SQL限流的生效时长，单位为秒。
     * >限流规则仅在生效时间内开启。
     * @example `300`
     */
    "ConcurrencyControlTime": number;
}
