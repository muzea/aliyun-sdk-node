export interface SuspendJobsRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 过滤条件，是否暂停所有
     * @example `false`
     */
    "All": boolean;
    /**
     * 过滤条件，场景id
     * @example `4b6dd926-3cc3-4111-a333-15d9b006fe81`
     */
    "ScenarioId"?: string;
    /**
     * 过滤条件，作业组id
     * @example `6b3ea2a1-32b3-4041-842b-9bde5de9dda0`
     */
    "JobGroupId"?: string;
    /**
     * 作业id
     * @example `11994321-e6bc-47bb-8b1c-8eef8f2f768b`
     */
    "JobId"?: string[];
    /**
     * 作业的第三方id
     * @example `de3ab269-6746-477c-b13d-bd49f13202c2`
     */
    "JobReferenceId"?: string[];
}
