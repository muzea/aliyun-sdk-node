export interface ListDatabaseUserPermssionsResponse {
    /**
     * 满足条件的记录总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `68075D06-7406-4887-83A7-F558A4D28C13`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    UserPermissions: {
        /**
         * 用户权限详情。
         */
        UserPermission: {
            /**
             * 库ID。
             * @example `1234`
             */
            DbId: string;
            /**
             * 表名。
             * @example `table_name`
             */
            TableName: string;
            /**
             * 用户ID。
             * @example `14324`
             */
            UserId: string;
            /**
             * 数据库名。
             * @example `xxx@xxxx:3306`
             */
            SchemaName: string;
            /**
             * 是否逻辑库。
             * @example `false`
             */
            Logic: boolean;
            /**
             * 用户昵称。
             * @example `user_nick_name`
             */
            UserNickName: string;
            /**
             * 实例ID。
             * @example `1443`
             */
            InstanceId: string;
            PermDetails: {
                /**
                 * 用户权限详情。
                 */
                PermDetail: {
                    /**
                     * 权限申请来源描述
                     * @example `xxx grant`
                     */
                    OriginFrom: string;
                    /**
                     * 权限类型，取值和说明如下：
                     * - QUERY：查询
                     * - EXPORT：导出
                     * - CORRECT：变更
                     * @example `QUERY`
                     */
                    PermType: string;
                    /**
                     * 权限过期时间
                     * @example `2020-12-12 00:00:00`
                     */
                    ExpireDate: string;
                    /**
                     * 权限创建时间
                     * @example `2019-12-12 00:00:00`
                     */
                    CreateDate: string;
                    /**
                     * 权限记录ID
                     * @example `13434`
                     */
                    UserAccessId: string;
                    /**
                     * 附加信息，预留属性
                     * @example `DEFAULT`
                     */
                    ExtraData: string;
                }[];
            };
            /**
             * 数据库所属环境。
             * @example `product`
             */
            EnvType: string;
            /**
             * 字段名。
             * @example `column_name`
             */
            ColumnName: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
            /**
             * 资源权限类型。
             * @example `DATABASE`
             */
            DsType: string;
            /**
             * 表ID。
             * @example `42345`
             */
            TableId: string;
            /**
             * 数据库搜索名。
             * @example `xxx`
             */
            SearchName: string;
            /**
             * 实例别名。
             * @example `instance_alias`
             */
            Alias: string;
        }[];
    };
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
