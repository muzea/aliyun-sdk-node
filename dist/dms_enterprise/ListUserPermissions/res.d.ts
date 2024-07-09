export interface ListUserPermissionsResponse {
    /**
     * 满足条件记录总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `C51420E3-144A-4A94-B473-8662FCF4AD10`
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
         * 用户权限信息列表。
         */
        UserPermission: {
            /**
             * 库ID。
             * @example `1860****`
             */
            DbId: string;
            /**
             * 表名。
             * @example `test_table`
             */
            TableName: string;
            /**
             * 用户ID。
             * @example `51****`
             */
            UserId: string;
            /**
             * 数据库名。
             * @example `test_db`
             */
            SchemaName: string;
            /**
             * 是否逻辑库，取值：
             * - true：逻辑库
             * - false：物理库
             * @example `false`
             */
            Logic: boolean;
            /**
             * 用户名。
             * @example `nick_name`
             */
            UserNickName: string;
            /**
             * 实例ID。
             * @example `174****`
             */
            InstanceId: string;
            PermDetails: {
                /**
                 * 权限详情。
                 */
                PermDetail: {
                    /**
                     * 权限授予来源信息。
                     * @example `xxx授权`
                     */
                    OriginFrom: string;
                    /**
                     * 权限类型，返回值如下：
                     * - QUERY：查询
                     * - EXPORT：导出
                     * - CORRECT：变更
                     * @example `QUERY`
                     */
                    PermType: string;
                    /**
                     * 授权到期时间。
                     * @example `2020-12-12 00:00:00`
                     */
                    ExpireDate: string;
                    /**
                     * 权限授予时间。
                     * @example `2019-12-12 00:00:00`
                     */
                    CreateDate: string;
                    /**
                     * 授权记录ID。
                     * @example `758****`
                     */
                    UserAccessId: string;
                    /**
                     * 额外数据，预留参数。
                     * @example `xxx`
                     */
                    ExtraData: string;
                }[];
            };
            /**
             * 数据库所属环境类型，返回值如下：
             * - product：生产环境
             * - dev：开发环境
             * - pre：预发环境
             * - test：测试环境
             * - sit：SIT环境
             * - uat：UAT环境
             * - pet：压测环境
             * - stag：STAG环境
             * @example `dev`
             */
            EnvType: string;
            /**
             * 字段名。
             * @example `column_name`
             */
            ColumnName: string;
            /**
             * 数据库类型，返回值请参见[DbType参数说明](~~198106~~)。
             * @example `polardb`
             */
            DbType: string;
            /**
             * 权限类型，取值如下：
             * - DATABASE： 物理库权限
             * - LOGIC_DATABASE：逻辑库权限
             * - TABLE：物理表权限
             * - LOGIC_TABLE：逻辑表权限
             * @example `DATABASE`
             */
            DsType: string;
            /**
             * 表ID。
             * @example `13434`
             */
            TableId: string;
            /**
             * 库搜索名。
             * @example `test_db@xxx:3306`
             */
            SearchName: string;
            /**
             * 实例别名。
             * @example `instance_alias`
             */
            Alias: string;
            /**
             * 实例地址。
             * @example `rm-bp144d5ky4l4r****`
             */
            Host: string;
            /**
             * 实例端口。
             * @example `3306`
             */
            Port: number;
        }[];
    };
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
