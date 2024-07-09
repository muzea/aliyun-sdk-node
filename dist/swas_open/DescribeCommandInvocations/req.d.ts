export interface DescribeCommandInvocationsRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId"?: string;
    /**
     * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
     * @example `c-sh02yh0932w****`
     */
    "CommandId"?: string;
    /**
     * 命令执行ID。
     * @example `t-hz02p9545t6****`
     */
    "InvokeId"?: string;
    /**
     * 命令名称。如果同时设置了InstanceId参数，则该参数不生效。
     * @example `testName`
     */
    "CommandName"?: string;
    /**
     * 命令执行的总执行状态，总执行状态取决于本次调用的全部实例的共同执行状态，可能值：
     * -  Pending：系统正在校验或发送命令。存在至少一台实例的命令执行状态为Pending，则总执行状态为Pending。
     * -  Running：命令正在实例上运行。存在至少一台实例的命令执行状态为Running，则总执行状态为Running。
     * -  Success：各个实例上的命令执行状态均为Stopped或Success，且至少一个实例的命令执行状态是Success，则总执行状态为Success。
     *     -  立即运行的任务：命令执行完成，且退出码为0。
     * -  Failed：各个实例上的命令执行状态均为Stopped或Failed，则总执行状态为Failed。实例上的命令执行状态一项或多项为以下状态时，返回值均为Failed状态：
     *     - 命令校验失败（Invalid）
     *     - 命令发送失败（Aborted）
     *     - 命令执行完成但退出码非0（Failed）
     *     - 命令执行超时（Timeout）
     *     - 命令执行异常（Error）
     * -  Stopping：正在停止任务。存在至少一台实例的命令执行状态为Stopping，则总执行状态为Stopping。
     * -  Stopped：任务已停止。所有实例的命令执行状态是Stopped，则总执行状态为Stopped。实例上的命令执行状态为以下状态时，返回值均为Stopped状态：
     *     - 任务已取消（Cancelled）
     *     - 任务已终止（Terminated）
     * -  PartialFailed：部分实例执行成功且部分实例执行失败。各个实例的命令执行状态均为Success、Failed或Stopped，则总执行状态为PartialFailed。
     * > 返回参数中的`InvokeStatus`与该参数意义相似，但建议您查看该返回值。
     * @example `Success`
     */
    "InvocationStatus"?: string;
    /**
     * 命令类型。可能值：
     * - RunBatScript：适用于Windows实例的Bat命令。
     * - RunPowerShellScript：适用于Windows实例的PowerShell命令。
     * - RunShellScript：适用于Linux实例Shell命令。
     * @example `RunPowerShellScript`
     */
    "CommandType"?: string;
    /**
     * 当前页码。起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: string;
}
