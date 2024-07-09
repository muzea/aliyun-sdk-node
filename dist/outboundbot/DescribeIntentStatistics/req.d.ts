export interface DescribeIntentStatisticsRequest {
    /**
     * 实例id
     * @example `c3c92de8-e4bd-4db4-a962-50f8acce40bc`
     */
    "InstanceId": string;
    /**
     * 作业组id
     * @example `040355a9-e80c-4308-b85c-aa5b9fd25246`
     */
    "JobGroupId": string;
    /**
     * 个数
     * @example `5`
     */
    "Limit"?: number;
}
