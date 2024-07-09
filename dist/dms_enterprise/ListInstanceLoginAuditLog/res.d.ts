export interface ListInstanceLoginAuditLogResponse {
    /**
     * 操作总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `074CE7C9-4F9C-5B62-89BC-7B4914A3****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidPageSize`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Specified parameter PageSize is not valid.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    InstanceLoginAuditLogList: {
        /**
         * 实例登录审计信息列表。
         */
        InstanceLoginAuditLog: {
            /**
             * 操作时间。
             * @example `2021-11-18 11:13:26`
             */
            OpTime: string;
            /**
             * 操作人昵称。
             * @example `test_UserName`
             */
            UserName: string;
            /**
             * 操作人ID。
             * @example `12****`
             */
            UserId: number;
            /**
             * 实例名称。
             * @example `rm-bp144d5ky4l4rli0417****.mysql.rds.aliyuncs.com:3306【rm-bp144d5ky4l4r****】`
             */
            InstanceName: string;
            /**
             * 实例ID。
             * @example `177****`
             */
            InstanceId: number;
            /**
             * 使用数据库的账号名称。
             * @example `test_User`
             */
            DbUser: string;
            /**
             * 请求来源IP。
             * @example `117.36.XX.XX,100.104.XX.XX`
             */
            RequestIp: string;
        }[];
    };
}
