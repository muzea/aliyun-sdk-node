export interface DescribeTaskAttributeRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID。您可以调用[DescribeTasks](~~25622~~)查看任务ID。
     * @example `t-ce946ntx4wr****`
     */
    "TaskId": string;
}
