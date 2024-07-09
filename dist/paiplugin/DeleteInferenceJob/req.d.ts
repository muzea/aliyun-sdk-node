export interface DeleteInferenceJobRequest {
    /**
     * 预测任务ID，可通过ListInferenceJobs查询账号下的预测任务列表，获取预测任务ID。
     * @example `0bddaf8f-5628-427a-8652-5e24f6b4c35d`
     */
    "Id"?: string;
}
