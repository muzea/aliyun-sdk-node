export interface DescribeSQLCollectorRetentionResponse {
    /**
     * SQL洞察日志保存时长，取值：
     * * **30**：30天
     * * **180**：180天
     * * **365**：1年
     * * **1095**：3年
     * * **1825**：5年
     * > RDS PostgreSQL和RDS SQL Server的SQL洞察日志保存时长固定为30天。
     * @example `365`
     */
    ConfigValue: string;
    /**
     * 请求ID。
     * @example `D5CEDCC2-CA75-43F7-9508-92F418CE6391`
     */
    RequestId: string;
}
