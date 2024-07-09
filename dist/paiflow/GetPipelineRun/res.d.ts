export interface GetPipelineRunResponse {
    /**
     * 请求ID。
     * @example `DA869D1B-035A-43B2-ACC1-C56681BD9FAA
    `
     */
    RequestId: string;
    /**
     * 工作流任务ID。
     * @example `flow-j94y**********lf7a
    `
     */
    PipelineRunId: string;
    /**
     * 工作流任务名字。
     * @example `testName`
     */
    Name: string;
    /**
     * 工作流任务状态，可能值如下：
     * - Initialized
     * - Running
     * - Succeeded
     * - Failed
     * - Suspended
     * - Terminated
     * - Unknown
     * - Skipped
     * - Terminating
     * @example `Succeeded`
     */
    Status: string;
    /**
     * 工作流任务的定义。
     * @example `{"ApiVersion":"core/v1","Metadata":{"NodeId":"node-n06d**********fc53","Provider":"155**********904","Name":"flow-j94y**********lf7a","Version":"v1","Identifier":"9fe11111-****-****-****-****ec811861","Namespace":null,"DisplayName":"name","NodeType":"Dag"},"Spec":{}}`
     */
    Manifest: string;
    /**
     * 工作流任务的参数。
     * @example `{"arguments":{"parameters":[{"name":"execution","value":{"endpoint":"http://service.******","odpsProject":"******","spec":{"endpoint":"http://service.******","odpsProject":"*****"},"resourceType":"MaxCompute"}}]}}`
     */
    Arguments: string;
    /**
     * 创建用户ID。
     * @example `155**********904
    `
     */
    UserId: string;
    /**
     * 创建用户阿里云账号的ID。
     * @example `155**********904
    `
     */
    ParentUserId: string;
    /**
     * 工作流任务的开始UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z
    `
     */
    StartedAt: string;
    /**
     * 工作流任务的结束UTC时间，格式ISO8601。
     * @example `2021-01-30T12:52:33.028Z
    `
     */
    FinishedAt: string;
    /**
     * 工作流任务的节点ID。
     * @example `node-n06d**********fc53
    `
     */
    NodeId: string;
    /**
     * 工作流任务的运行时长，单位为秒。
     * @example `60`
     */
    Duration: number;
    /**
     * 所属工作空间ID。
     * @example `15945`
     */
    WorkspaceId: string;
    /**
     * 工作流任务失败提示信息。
     * @example `error message
    `
     */
    Message: string;
    /**
     * 工作流任务来源类型，可能值：
     * - UNKNOWN（默认）：未指定来源类型时的默认值。
     * - SDK：通过SDK创建的工作流任务。
     * - DESIGNER：通过Designer创建的工作流任务。
     * - M6：通过其他网站创建的工作流任务。
     * @example `UNKNOWN`
     */
    SourceType: string;
    /**
     * 工作流任务的来源ID。
     * @example `abcd*********hxfu
    `
     */
    SourceId: string;
    /**
     * 工作流任务选项，格式为JSON。
     * @example `{"mlflow":{"experimentId":"exp-**********"}}
    `
     */
    Options: string;
    /**
     * 创建UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z
    `
     */
    GmtCreateTime: string;
    /**
     * 最近修改UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z
    `
     */
    GmtModifiedTime: string;
    /**
     * 工作流ID。
     * @example `pipeline-j94y**********lf7a
    `
     */
    PipelineId: string;
    /**
     * 工作流任务的可见性，目前支持：
     * - PUBLIC
     * - PRIVATE
     * @example `PUBLIC`
     */
    Accessibility: string;
    /**
     * 工作流任务详情URL。
     * @example `https://pai.console.aliyun.com/?regionId=cn-shanghai&workspaceId=24****#/studio/task/detail/flow-dsfbjt4k07lvp1****`
     */
    PipelineRunUri: string;
}
