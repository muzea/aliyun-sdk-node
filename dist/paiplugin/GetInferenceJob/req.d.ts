export interface GetInferenceJobRequest {
    /**
     * 预测任务Id，可通过ListInferenceJobs查询账号下的预测任务列表，获取预测任务Id。
     * @example `0bddaf8f-5628-427a-8652-5e24f6b4c35d`
     */
    "Id"?: string;
}
