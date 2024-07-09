export interface StopJobRequest {
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
     * @example `88a8fc49-e090-430a-85d8-3ee8c79c****`
     */
    "jobId": string;
    /**
     * 停止作业实例参数。
     */
    "body": any;
}
