export interface ResumeJobsRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 过滤条件，是否重启所有
     * @example `true`
     */
    "All": boolean;
    /**
     * 过滤条件，场景id
     * @example `b016fbdb-b81c-4c06-8870-cb36b8783b6d`
     */
    "ScenarioId"?: string;
    /**
     * 过滤条件，作业组id
     * @example `de48407d-309e-451a-81ec-6fb11f8fdbf3`
     */
    "JobGroupId"?: string;
    /**
     * 作业id
     * @example `b72425bd-7871-4050-838e-033d80d754b7`
     */
    "JobId"?: string[];
    /**
     * 作业的第三方id
     * @example `d5971d98-7312-4f0e-a918-a17d67133e28`
     */
    "JobReferenceId"?: string[];
}
