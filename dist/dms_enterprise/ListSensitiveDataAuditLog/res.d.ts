export interface ListSensitiveDataAuditLogResponse {
    /**
     * 请求ID。
     * @example `E0D21075-CD3E-4D98-8264-FD8AD04A63B6`
     */
    RequestId: string;
    /**
     * 日志总数据量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 敏感数据审核日志列表。
     */
    SensitiveDataAuditLogList: {
        /**
         * 操作人员名称。
         * @example `ExampleUserName`
         */
        UserName: string;
        /**
         * 操作人员ID。
         * @example `1**`
         */
        UserId: number;
        /**
         * 功能模块名称。
         * @example `SQL_CONSOLE`
         */
        ModuleName: string;
        /**
         * 搜索的数据库名。
         * @example `ExampleDbName@xxx.xxx.xxx.xxx:3306`
         */
        DbDisplayName: string;
        /**
         * 操作时间，时间格式为yyyy-MM-DD HH:mm:ss。
         * @example `2022-11-18 10:01:00`
         */
        OpTime: string;
        /**
         * 实例ID。
         * @example `12****`
         */
        InstanceId: number;
        /**
         * 操作对象详情。格式为：
         * - 操作对象名称-操作对象ID
         * - 操作对象名称（操作对象ID）
         * @example `工单 - 1****`
         */
        TargetName: string;
        /**
         * 敏感数据日志信息。
         */
        SensitiveDataLog: {
            /**
             * 敏感数据所在数据表名。
             * @example `ExampleTableName`
             */
            TableName: string;
            /**
             * 敏感数据字段名。
             * @example `ExampleColumnName`
             */
            ColumnName: string;
            /**
             * 敏感等级，可分为：
             * - **低敏感**
             * - **中敏感**
             * - **高敏感**
             * @example `低敏感`
             */
            SecurityLevel: string;
            /**
             * 用户的字段权限。说明如下：
             * - **无权限**
             * - **半脱敏权限**
             * - **明文权限**
             * - **变更权限**
             * - **开启脱敏配置**
             * - **关闭脱敏配置**
             * @example `变更权限`
             */
            ColumnPermissionType: string;
            /**
             * 脱敏算法。
             * @example `系统默认-全遮掩`
             */
            DesensitizationRule: string;
        }[];
    }[];
}
