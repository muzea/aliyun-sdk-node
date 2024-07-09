export interface ListTasksRequest {
    /**
     * 查询地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID列表。N的取值范围：1~100。
     */
    "TaskId"?: string[];
    /**
     * 任务状态。取值范围：
     * - Finished：已完成。
     * - Processing：运行中。
     * - Failed：失败。
     * 默认值：无。
     * > 只支持查询状态为Finished、Processing和Failed的任务，填入其他取值将不会生效。
     * @example `Finished`
     */
    "TaskStatus"?: string;
    /**
     * 任务操作的接口名称。取值范围：
     * - Shell：运行shell命令。
     * - InstallApplication：安装应用。
     * - UninstallApplication：卸载应用。
     * - SendFile：上传文件。
     * - ImportImage：导入镜像。
     * @example `Shell`
     */
    "TaskType"?: string;
    /**
     * 实例ID。
     * @example `cp-acfmxazb4p***`
     */
    "InstanceId"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值，初次调用无需配置。
     * @example `55C15B1C-D507-45F0-B490-69D6E0F113C6`
     */
    "NextToken"?: string;
    /**
     * 返回的最大数。取值范围：1~100
     * 默认值：50。
     * @example `50`
     */
    "MaxResults"?: number;
}
