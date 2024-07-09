export interface CreateSimulatedSystemEventsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 系统事件的类型。取值范围：
     * - SystemMaintenance.Reboot：因系统维护实例重启
     * - SystemFailure.Reboot：因系统错误实例重启
     * - InstanceFailure.Reboot：因实例错误实例重启
     * - SystemMaintenance.Stop：因系统维护实例停止
     * - SystemMaintenance.Redeploy：因系统维护实例重新部署
     * - SystemFailure.Redeploy：因系统错误实例重新部署
     * - SystemFailure.Stop：因系统错误实例重新停止
     * - InstanceFailure.Reboot：因实例错误实例重启
     * @example `SystemMaintenance.Reboot`
     */
    "EventType": string;
    /**
     * 事件计划执行的开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 对于系统错误或实例错误导致的异常事件，创建事件后，事件已处于正在执行（`Executing`）状态，此时参数`NotBefore`为事件进入完成执行（`Executed`）状态的时间。
     * @example `2018-12-01T06:32:31Z`
     */
    "NotBefore": string;
    /**
     * ECS实例ID列表信息。可输入最多100个实例ID。
     * @example `i-bp1gtjxuuvwj17zr****`
     */
    "InstanceId": string[];
}
