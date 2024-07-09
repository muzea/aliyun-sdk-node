export interface GetPipelineResponse {
    /**
     * 请求ID。
     * @example `63EDFF2F-4D51-46F0-9D65-2F8F393B****`
     */
    RequestId: string;
    /**
     * 工作流ID。
     * @example `pipeline-hynm2bv8wqhp5e****`
     */
    PipelineId: string;
    /**
     * 自定义工作流，为用户ID。官方工作流为PAI。
     * @example `132668941337****`
     */
    Provider: string;
    /**
     * 工作流标识。
     * @example `SqlWrite`
     */
    Identifier: string;
    /**
     * 工作流版本。
     * @example `v1`
     */
    Version: string;
    /**
     * 工作流定义。
     * @example `apiVersion: ****`
     */
    Manifest: string;
    /**
     * 创建UTC时间，日期格式ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtCreateTime: string;
    /**
     * 最后修改UTC时间，日期格式ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtModifiedTime: string;
    /**
     * 工作流当前版本标识，用户每次更新，会生成该Uuid。
     * @example `q8dp9hklueznhg****`
     */
    Uuid: string;
    /**
     * 工作空间ID。
     * @example `726**`
     */
    WorkspaceId: string;
}
