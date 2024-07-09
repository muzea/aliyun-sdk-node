export interface ListJobsByGroupRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 作业组id
     * @example `de48407d-309e-451a-81ec-6fb11f8fdbf3`
     */
    "JobGroupId": string;
    /**
     * 作业状态
     * @example `Succeeded`
     */
    "JobStatus"?: string;
    /**
     * 作业失败原因
     * @example `NoAnswer`
     */
    "JobFailureReason"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize": number;
}
