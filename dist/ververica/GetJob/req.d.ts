export interface GetJobRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 作业实例ID。
     * @example `5af678c0-7db0-4650-94c2-d2604f0a****`
     */
    "jobId": string;
}
