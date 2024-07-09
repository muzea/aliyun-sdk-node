export interface DescribePreCheckResultRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drdshbga76p6****`
     */
    "DrdsInstanceId": string;
    /**
     * 任务ID。
     * @example `4561`
     */
    "TaskId": string;
}
