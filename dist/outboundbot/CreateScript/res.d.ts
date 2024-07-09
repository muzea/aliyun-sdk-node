export interface CreateScriptResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 话术信息
     */
    Script: {
        /**
         * 任务状态。取值范围：
         * - **DRAFTED**：草稿态。
         * - **INITIALIZE_IN_PROGRESS**：正在初始化。
         * - **PUBLISHED**：已发布。
         * - **PUBLISH_IN_PROGRESS**：正在发布。
         * - **ROLLBACK_IN_PROGRESS**：正在回滚。
         * - **EXAMINE_IN_PROGRESS**：待审核。
         * - **PUBLISHED_AND_EXAMINE_IN_PROGRESS**：已发布待审核状态。
         * - **PUBLISH_FAILED**：发布失败。
         * - **ROLLBACK_FAILED**：回滚失败。
         * - **IMPORT_IN_PROGRESS**：正在导入。
         * - **IMPORT_FAILED**：导入失败。
         * @example `DRAFTED`
         */
        Status: string;
        /**
         * 话术更新时间（单位：毫秒）
         * @example `1578474045152`
         */
        UpdateTime: number;
        /**
         * 行业
         * @example `教育`
         */
        Industry: string;
        /**
         * 话术描述
         * @example `课程满意度回访`
         */
        ScriptDescription: string;
        /**
         * 是否是草稿
         * @example `true`
         */
        IsDrafted: boolean;
        /**
         * 话术调试状态
         * @example `DRAFTED`
         */
        DebugStatus: string;
        /**
         * 话术id
         * @example `8c58d3e0-bf27-4685-a5a5-65872ec5abc4`
         */
        ScriptId: string;
        /**
         * 是否是调试的草稿
         * @example `true`
         */
        IsDebugDrafted: boolean;
        /**
         * 话术名字
         * @example `课程满意度回访`
         */
        ScriptName: string;
        /**
         * 话术场景
         * @example `回访`
         */
        Scene: string;
    };
}
