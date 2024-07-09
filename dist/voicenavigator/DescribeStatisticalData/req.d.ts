export interface DescribeStatisticalDataRequest {
    /**
     * 实例ID
     * @example `c28fc549-d88f-4f6e-85ad-a0806e5e39c0`
     */
    "InstanceId": string;
    /**
     * 日期单元
     * @example `Day/Hour`
     */
    "TimeUnit": string;
    /**
     * 开始时间左区间
     * @example `1582283640000`
     */
    "BeginTimeLeftRange"?: number;
    /**
     * 开始时间右区间
     * @example `1582298040000`
     */
    "BeginTimeRightRange"?: number;
}
