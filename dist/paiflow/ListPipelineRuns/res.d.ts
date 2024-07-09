export interface ListPipelineRunsResponse {
    /**
     * 请求ID。
     * @example `473469C7-****-****-****-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的工作流任务总量。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 返回的工作流任务列表。
     */
    PipelineRuns: {
        /**
         * 工作流任务ID。
         * @example `flow-j94y**********lf7a
        `
         */
        PipelineRunId: string;
        /**
         * 工作流任务名字。
         * @example `testName
        `
         */
        Name: string;
        /**
         * 工作流任务状态，目前有下面几种状态：
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
         * 创建用户ID。
         * @example `155**********904`
         */
        UserId: string;
        /**
         * 创建用户主账户的ID。
         * @example `155**********904`
         */
        ParentUserId: string;
        /**
         * 工作流任务的开始UTC时间，格式iso8601。
         * @example `2021-01-30T12:51:33.028Z
        `
         */
        StartedAt: string;
        /**
         * 工作流任务的结束UTC时间，格式iso8601。
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
         * 工作流任务来源类型，支持如下值：
         * - UNKNOWN
         * - SDK
         * - DESIGNER
         * - M6
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
         * 创建UTC时间，格式iso8601。
         * @example `2021-01-30T12:51:33.028Z
        `
         */
        GmtCreateTime: string;
        /**
         * 最近修改UTC时间，格式iso8601。
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
    }[];
}
