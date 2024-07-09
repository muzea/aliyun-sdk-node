export interface DescribeJobGroupRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 作业组id
     * @example `46a9ad0c-3e11-44da-a9a7-2c21bf5ce185`
     */
    "JobGroupId": string;
    /**
     * 过滤条件
     */
    "BriefTypes"?: string[];
}
