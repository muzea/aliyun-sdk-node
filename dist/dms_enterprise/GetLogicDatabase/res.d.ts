export interface GetLogicDatabaseResponse {
    /**
     * 逻辑库详情信息。
     */
    LogicDatabase: {
        /**
         * 逻辑库ID。
         * @example `1***`
         */
        DatabaseId: string;
        OwnerIdList: {
            /**
             * 逻辑库Owner的用户ID列表。
             */
            OwnerIds: string[];
        };
        /**
         * 数据库类型。返回值请参见[DbType参数说明](~~198106~~)。
         * @example `POLARDB`
         */
        DbType: string;
        OwnerNameList: {
            /**
             * 逻辑库Owner的昵称列表。
             */
            OwnerNames: string[];
        };
        /**
         * 是否为逻辑库，返回值为true。
         * @example `true`
         */
        Logic: boolean;
        /**
         * 逻辑库名。
         * @example `test_logic_db`
         */
        SchemaName: string;
        /**
         * 逻辑库搜索名。
         * @example `test_logic_db[test_logic_alias]`
         */
        SearchName: string;
        /**
         * 环境类型，返回值如下：
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
         * 逻辑库别名。
         * @example `test_logic_alias`
         */
        Alias: string;
        DatabaseIds: {
            /**
             * 逻辑库分库ID列表。
             */
            DatabaseIds: number[];
        };
    };
    /**
     * 请求ID。
     * @example `90260530-565C-42B9-A6E8-893481FE6AB6`
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
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
