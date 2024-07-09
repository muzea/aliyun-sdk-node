export interface KillProcessListResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 会话 ID。
         * @example `1123`
         */
        SessionId: number;
        /**
         * 服务器 IP。
         * @example `127.*.*.*`
         */
        ServerIp: string;
        /**
         * 任务状态。
         * @example `SLEEP`
         */
        Status: string;
        /**
         * 错误信息。
         * @example `Instance not found.`
         */
        ErrorMessage: string;
        /**
         * 客户端 IP。
         * @example `127.*.*.*`
         */
        ClientIp: string;
        /**
         * 租户 ID。
         * @example `t3ogq******n4`
         */
        TenantId: string;
        /**
         * 数据库用户名。
         * @example `oas`
         */
        User: string;
        /**
         * 数据库名称。
         * @example `test`
         */
        Database: string;
        /**
         * SQL 语句。
         * @example `:`
         */
        SqlText: string;
        /**
         * 应用容器启动命令。
         * @example `select 1`
         */
        Command: string;
        /**
         * 执行时间 (UTC+8)，为空立即执行。
         * @example `142`
         */
        ExecuteTime: string;
    }[];
}
