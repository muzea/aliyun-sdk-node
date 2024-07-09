export interface CheckSqlAuditEnableStatusResponse {
    /**
     * SQL审计功能开启状态，取值范围如下：
     * * enabled：已开启
     * * disabled：未开启
     * @example `enabled`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `FF13E47D-4E38-4A5A-BA68-32A554******`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
