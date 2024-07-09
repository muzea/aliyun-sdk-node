export interface ListAppReleaseStageExecutionIntegratedMetadataRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
    /**
     * 应用名
     * @example `testApp`
     */
    "appName": string;
    /**
     * 研发流程sn
     * @example `ce51b31b996246ecaf874736838360b2`
     */
    "releaseWorkflowSn": string;
    /**
     * 研发阶段sn
     * @example `e173f3c11db5445eb426ca33c92207c8`
     */
    "releaseStageSn": string;
    /**
     * 研发阶段的执行记录编号
     * @example `1`
     */
    "executionNumber": number;
}
