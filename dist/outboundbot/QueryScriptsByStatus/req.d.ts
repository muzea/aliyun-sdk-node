export interface QueryScriptsByStatusRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 状态列表，取值范围
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
    "StatusList": string[];
}
