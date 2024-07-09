export interface ListLogicDatabasesResponse {
    /**
     * 逻辑库总数。
     * @example `7`
     */
    TotalCount: number;
    LogicDatabaseList: {
        /**
         * 逻辑库列表。
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
             * 逻辑库的数据库类型，返回值请参见[DbType参数说明](~~198106~~)。
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
             * 是否为逻辑库，返回值为True。
             * @example `true`
             */
            Logic: boolean;
            /**
             * 逻辑库名。
             * @example `logic_db`
             */
            SchemaName: string;
            /**
             * 逻辑库搜索名。
             * > 建议您的业务不要强依赖该参数，后续版本的格式可能会发生变化。
             * @example `logic_db[logic_db_alias]`
             */
            SearchName: string;
            /**
             * 逻辑库所属环境类型，返回值如下：
             * - **product**：生产环境
             * - **dev**：开发环境
             * - **pre**：预发环境
             * - **test**：测试环境
             * - **sit**：SIT环境
             * - **uat**：UAT环境
             * - **pet**：压测环境
             * - **stag**：STAG环境
             * @example `test`
             */
            EnvType: string;
            /**
             * 逻辑库别名。
             * @example `logic_db_alias`
             */
            Alias: string;
            DatabaseIds: {
                /**
                 * 逻辑库分库ID列表。
                 */
                DatabaseIds: number[];
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `8068AF82-8A1A-592C-AC2E-6B75338BAB87`
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
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
