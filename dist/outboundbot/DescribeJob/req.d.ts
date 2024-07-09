export interface DescribeJobRequest {
    /**
     * 实例ID。
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 作业ID。
     * @example `c8a2b7f2-ad1a-4865-b872-d0080d9802d9`
     */
    "JobId": string;
    /**
     * 是否返回任务场景信息。
     * @example `false`
     */
    "WithScript"?: boolean;
}
