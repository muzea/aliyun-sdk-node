export interface GetExperimentTaskRequest {
    /**
     * 故障演练任务实例ID
     * @example `1234567890123456789`
     */
    "ExperimentTaskId": string;
    /**
     * 演练所属命名空间
     * @example `default`
     */
    "NameSpace"?: string;
    /**
     * 演练所属地域ID
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
