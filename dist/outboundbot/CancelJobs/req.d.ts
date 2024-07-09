export interface CancelJobsRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 是否取消全部
     * @example `false`
     */
    "All": boolean;
    /**
     * 过滤条件，作业使用的场景id
     * @example `9cef0dd3-b9d6-4748-9a6f-77a8c3402bb1`
     */
    "ScenarioId"?: string;
    /**
     * 过滤条件，作业归属的作业组id
     * @example `9f84892d-721a-4069-9975-668c8164d64e`
     */
    "JobGroupId"?: string;
    /**
     * 过滤条件，作业id
     * @example `edf45790-7200-4cbc-b157-8c0a5f400b75`
     */
    "JobId"?: string[];
    /**
     * 过滤条件，作业的引用id
     * @example `4a875676-b136-4087-88b4-de67c61fed69`
     */
    "JobReferenceId"?: string[];
}
