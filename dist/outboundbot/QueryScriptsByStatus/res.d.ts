export interface QueryScriptsByStatusResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 话术列表
     */
    Scripts: {
        /**
         * 分页序号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 对象总数
         * @example `1`
         */
        TotalCount: number;
        /**
         * 话术信息数组
         */
        List: {
            /**
             * 应用版本的状态，取值范围
             * - **DRAFTED**：草稿态
             * - **INITIALIZE_IN_PROGRESS**：正在初始化
             * - **PUBLISHED**：已发布
             * - **PUBLISH_IN_PROGRESS**：正在发布
             * - **ROLLBACK_IN_PROGRESS**：正在回滚
             * - **EXAMINE_IN_PROGRESS**：待审核
             * - **PUBLISHED_AND_EXAMINE_IN_PROGRESS**：已发布待审核状态
             * - **PUBLISH_FAILED**：已发布待审核状态
             * - **ROLLBACK_FAILED**：回滚失败
             * - **IMPORT_IN_PROGRESS**：正在导入
             * - **IMPORT_FAILED**：导入失败
             * @example `PUBLISHED`
             */
            Status: string;
            /**
             * 更新时间
             * @example `1579055782000`
             */
            UpdateTime: number;
            /**
             * 话术唯一ID
             * @example `fa0e21e9-caab-4629-9121-1e341243d599`
             */
            ScriptId: string;
            /**
             * 应用版本
             * @example `1579055782000`
             */
            AppliedVersion: string;
            /**
             * 调试版本是否为草稿态
             * @example `false`
             */
            IsDebugDrafted: boolean;
            /**
             * 行业
             * @example `金融`
             */
            Industry: string;
            /**
             * 话术描述
             * @example `销售话术`
             */
            ScriptDescription: string;
            /**
             * 应用版本是否为草稿态
             * @example `false`
             */
            IsDrafted: boolean;
            /**
             * 调试状态
             * @example `PUBLISHED`
             */
            DebugStatus: string;
            /**
             * 调试版本
             * @example `1579055782000`
             */
            DebugVersion: string;
            /**
             * 场景
             * @example `电销`
             */
            Scene: string;
            /**
             * 话术名称
             * @example `销售话术`
             */
            ScriptName: string;
        }[];
    };
}
