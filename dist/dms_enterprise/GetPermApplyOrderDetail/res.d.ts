export interface GetPermApplyOrderDetailResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `A4C4499E-5AC2-4318-9FCF-03E426781A04`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 调用失败时，返回的错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 权限申请详情。
     */
    PermApplyOrderDetail: {
        /**
         * 资源详情列表。
         */
        Resources: {
            /**
             * 数据库信息。
             */
            DatabaseInfo: {
                /**
                 * 数据库ID。
                 * @example `12345`
                 */
                DbId: number;
                /**
                 * 是否为逻辑库，取值：
                 * - **true**：是
                 * - **false**：否
                 * @example `false`
                 */
                Logic: boolean;
                /**
                 * 数据库类型。
                 * @example `MySQL`
                 */
                DbType: string;
                /**
                 * 数据库搜索名。
                 * > 建议您的业务不要强依赖该参数，后续版本的格式可能会发生变化。
                 * @example `test@xxxx:3306[test]`
                 */
                SearchName: string;
                /**
                 * 库Owner ID列表。
                 */
                OwnerIds: number[];
                /**
                 * 库Owner昵称列表。
                 */
                OwnerNickNames: string[];
                /**
                 * 实例的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
                 * @example `product`
                 */
                EnvType: string;
            };
            /**
             * 表信息。
             */
            TableInfo: {
                /**
                 * 表名。
                 * @example `test_tb`
                 */
                TableName: string;
            };
            /**
             * 字段信息。
             */
            ColumnInfo: {
                /**
                 * 表名。
                 * @example `test_tb`
                 */
                TableName: string;
                /**
                 * 字段名。
                 * @example `test_col`
                 */
                ColumnName: string;
            };
            /**
             * 实例信息。
             */
            InstanceInfo: {
                /**
                 * 实例ID。
                 * @example `12345`
                 */
                InstanceId: string;
                /**
                 * 搜索名。
                 * @example `xxxx:3306`
                 */
                SearchName: string;
                /**
                 * 数据库类型。
                 * @example `MySQL`
                 */
                DbType: string;
                /**
                 * 实例的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
                 * @example `product`
                 */
                EnvType: string;
                /**
                 * 连接地址。
                 * @example `xxxx`
                 */
                Host: string;
                /**
                 * 连接端口。
                 * @example `3306`
                 */
                Port: number;
                /**
                 * 实例Owner ID列表。
                 */
                OwnerIds: number[];
                /**
                 * 实例Owner昵称。
                 */
                OwnerNickName: string[];
                /**
                 * 实例DBA的ID。
                 * @example `123****`
                 */
                DbaId: number;
                /**
                 * 实例DBA昵称。
                 * @example `test_dba`
                 */
                DbaNickName: string;
            };
        }[];
        /**
         * 权限类型，取值和说明如下：
         * - **1**：查询
         * - **2**：导出
         * - **3**：查询和导出
         * - **4**：变更
         * - **5**：查询和变更
         * - **6**：导出和变更
         * - **7**：查询、导出和变更
         * - **8**：登录
         * @example `7`
         */
        PermType: number;
        /**
         * 权限时长，单位为秒。
         * @example `3600`
         */
        Seconds: number;
        /**
         * 申请权限类型，取值和说明如下：
         * - **DB**：库权限
         * - **TAB**：表权限
         * - **COL**：列权限
         * - **INSTANT**：实例权限
         * @example `DB`
         */
        ApplyType: string;
    };
}
