export interface TriggerSophonPlaybookRequest {
    /**
     * 想要触发的命令名称。
     * >调用[DescribeSophonCommands](~~DescribeSophonCommands~~)接口可以获取该参数。
     * @example `waf_process_command`
     */
    "CommandName"?: string;
    /**
     * 触发命令或剧本的输入参数。
     * @example `{
        "param1": "xx.xx.xx.xx",
        "param2": "7d"
    }`
     */
    "InputParams": string;
    /**
     * 业务的自定义ID，如果触发剧本时不指定，会产生一个随机的ID，用于排查与定位问题。
     * @example `f916b93e-e814-459f-9662-xxxxxxxxxx`
     */
    "SophonTaskId"?: string;
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `f916b93e-e814-459f-9662-xxxxxxxxxx`
     */
    "Uuid"?: string;
    /**
     * 触发类型，取值：
     * - **command**：触发命令任务
     * - **playbook**：触发剧本任务
     * @example `playbook`
     */
    "TriggerType"?: string;
}
