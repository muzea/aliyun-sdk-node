export interface DescribeInstancesFullStatusRequest {
    /**
     * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定实例的生命周期状态。取值范围：
     * - Starting：启动中。
     * - Running：运行中。
     * - Stopped：已停止。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 指定实例的健康状态。取值范围：
     * - OK：正常。
     * - Impaired：服务损坏。
     * - Initializing：初始化中。
     * - InsufficientData：数据不足。
     * - NotApplicable：不适用。
     * 以上参数取值均区分大小写。
     * @example `OK`
     */
    "HealthStatus"?: string;
    /**
     * 一个事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围：
     * - SystemMaintenance.Reboot：因系统维护实例重启。
     * - SystemFailure.Reboot：因系统错误实例重启。
     * - InstanceFailure.Reboot：因实例错误实例重启。
     * - InstanceExpiration.Stop：因包年包月期限到期，实例停止。
     * - InstanceExpiration.Delete：因包年包月期限到期，实例释放。
     * - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止。
     * - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放。
     * @example `InstanceExpiration.Stop`
     */
    "EventType"?: string;
    /**
     * 查询事件计划执行时间的开始时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-07T00:00:00Z`
     */
    "NotBefore.Start"?: string;
    /**
     * 查询事件计划执行时间的结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-11-30T00:00:00Z`
     */
    "NotBefore.End"?: string;
    /**
     * 查询事件发布时间的开始时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-11-30T00:00:00Z`
     */
    "EventPublishTime.Start"?: string;
    /**
     * 查询事件发布时间的结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-07T00:00:00Z`
     */
    "EventPublishTime.End"?: string;
    /**
     * 查询结果的页码。取值范围：正整数
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询结果的分页大小。取值范围：1~100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID列表。可输入最大100个实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string[];
    /**
     * 事件ID列表。可输入最多100个事件ID。
     * @example `e-bp1hygp5b04o56l0****`
     */
    "EventId"?: string[];
    /**
     * 实例事件的类型列表。可输入最大30个实例事件的类型。
     * @example `InstanceExpiration.Stop`
     */
    "InstanceEventType"?: string[];
}
