export interface QueryAuditLogResponse {
    /**
     * 请求ID。
     * @example `78C1AA2D-9201-599E-A0BA-6FC462E57A95`
     */
    RequestId: string;
    /**
     * 日志数组。
     */
    Result: {
        /**
         * 工作空间ID。
         * @example `87c6b145-090c-43e1-9426-8f93be23****`
         */
        WorkspaceId: string;
        /**
         * 操作者用户昵称。
         * @example `buc_344078`
         */
        OperatorName: string;
        /**
         * 操作者账号。
         * @example `wukaibis`
         */
        OperatorAccountName: string;
        /**
         * 操作类型。
         * @example `CREATE`
         */
        OperatorType: string;
        /**
         * 操作目标类型。
         * @example `USER`
         */
        TargetType: string;
        /**
         * 操作目标名称。
         * @example `测试`
         */
        TargetName: string;
        /**
         * 日志时间。
         * @example `2024-04-16 13:17:39`
         */
        GmtCreate: string;
    }[];
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
