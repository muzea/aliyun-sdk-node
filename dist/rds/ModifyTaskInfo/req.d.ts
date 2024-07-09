export interface ModifyTaskInfoRequest {
    /**
     * 地域ID。可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID。
     * @example `t-83br18hloum8u3948s`
     */
    "TaskId": string;
    /**
     * 执行步骤名称。
     * @example `ha_switch`
     */
    "StepName"?: string;
    /**
     * 任务操作的接口名称。取值范围：
     * - ImportImage：导入镜像
     * - ExportImage：导出镜像
     * - RedeployInstance：重新部署ECS实例
     * - ModifyDiskSpec：变更云盘类型
     * @example `ImportImage`
     */
    "TaskAction"?: string;
    /**
     * 动作指令参数
     * @example `{\"recoverTime\":\"2023-04-12T18:30:00Z\",\"recoverMode\":\"timePoint\"}`
     */
    "ActionParams"?: string;
}
