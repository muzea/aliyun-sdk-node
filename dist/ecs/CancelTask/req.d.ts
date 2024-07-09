export interface CancelTaskRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID。您可以调用[DescribeTasks](~~25622~~)查看任务ID列表。
     * @example `t-bp198jigq7l0h5ac****`
     */
    "TaskId": string;
}
