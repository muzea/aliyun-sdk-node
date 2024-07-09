export interface DescribeCommitContainerTaskRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。
     * 最大值为50。
     * 默认值为10。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 执行CommitContainer任务的ECI实例ID。
     * 查询时按实例ID或者任务ID进行查询，两者至少要填其中一个。
     * @example `eci-2zelg8vwnlzdhf8hv****`
     */
    "ContainerGroupId"?: string;
    /**
     * 任务状态。取值范围：
     * - Running：运行中
     * - Succeeded：成功
     * - Failed：失败
     * @example `Running`
     */
    "TaskStatus"?: string;
    /**
     * 任务ID。
     */
    "TaskId"?: string[];
}
