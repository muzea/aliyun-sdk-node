export interface DescribeInstanceHistoryEventsRequest {
    /**
     * 资源所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。不指定实例ID时，表示查询您指定地域下所有实例的系统事件信息。
     * @example `i-uf678mass4zvr9n1****`
     */
    "InstanceId"?: string;
    /**
     * 系统事件的生命周期状态。EventCycleStatus只在未指定InstanceEventCycleStatus.N参数时有效。取值范围：
     * - Scheduled：等待执行事件。
     * - Avoided：事件已避免。
     * - Executing：事件执行中。
     * - Executed：事件已完成执行。
     * - Canceled：事件已取消。
     * - Failed：事件执行失败。
     * - Inquiring：事件问询中。
     *
     * @example `Executed`
     */
    "EventCycleStatus"?: string;
    /**
     * 系统事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围：
     * - SystemMaintenance.Reboot：因系统维护实例重启。
     * - SystemMaintenance.Redeploy：因系统维护实例重新部署。
     * - SystemFailure.Reboot：因系统错误实例重启。
     * - SystemFailure.Redeploy：因系统错误实例重新部署。
     * - SystemFailure.Delete：因实例创建失败实例释放。
     * - InstanceFailure.Reboot：因实例错误实例重启。
     * - InstanceExpiration.Stop：因包年包月期限到期，实例停止。
     * - InstanceExpiration.Delete：因包年包月期限到期，实例释放。
     * - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止。
     * - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放。
     * > 事件类型说明请参见[系统事件概述](~~66574~~)。该参数的取值只能是实例系统事件，不能是磁盘系统事件。
     * @example `SystemMaintenance.Reboot`
     */
    "EventType"?: string;
    /**
     * 查询系统事件计划执行时间的开始时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-11-30T06:32:31Z`
     */
    "NotBefore.Start"?: string;
    /**
     * 查询系统事件计划执行时间的结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-01T06:32:31Z`
     */
    "NotBefore.End"?: string;
    /**
     * 查询系统事件发布时间的开始时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-11-30T06:32:31Z`
     */
    "EventPublishTime.Start"?: string;
    /**
     * 查询系统事件发布时间的结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-01T06:32:31Z`
     */
    "EventPublishTime.End"?: string;
    /**
     * >该参数暂未开放使用。
     * @example `null`
     */
    "ImpactLevel"?: string;
    /**
     * 查询结果的页码。取值范围：正整数。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询结果的分页大小。取值范围为1~100。
     * 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源类型。取值范围：
     * - instance：ECS实例。
     * - ddh：专有宿主机。
     * - managedhost：智能全托管资源池中的物理机。
     * 默认值：instance。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 一个或者多个系统事件ID。N的取值范围为1~100，多个取值使用重复列表的形式。
     * @example `e-uf64yvznlao4jl2c****`
     */
    "EventId"?: string[];
    /**
     * 一个或者多个系统事件的生命周期状态。N的取值范围：1~7，多个取值使用重复列表的形式。取值范围：
     * - Scheduled：等待执行事件。
     * - Avoided：事件已避免。
     * - Executing：事件执行中。
     * - Executed：事件已完成执行。
     * - Canceled：事件已取消。
     * - Failed：事件执行失败。
     * - Inquiring：事件问询中。
     * @example `Executed`
     */
    "InstanceEventCycleStatus"?: string[];
    /**
     * 一个或者多个系统事件的类型。N的取值范围：1~30，多个取值使用重复列表的形式。取值范围：
     * - SystemMaintenance.Reboot：因系统维护实例重启。
     * - SystemMaintenance.Redeploy：因系统维护实例重新部署。
     * - SystemFailure.Reboot：因系统错误实例重启。
     * - SystemFailure.Redeploy：因系统错误实例重新部署。
     * - SystemFailure.Delete：因实例创建失败实例释放。
     * - InstanceFailure.Reboot：因实例错误实例重启。
     * - InstanceExpiration.Stop：因包年包月期限到期，实例停止。
     * - InstanceExpiration.Delete：因包年包月期限到期，实例释放。
     * - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止。
     * - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放。
     * > 事件类型说明请参见[系统事件概述](~~66574~~)。该参数的取值只能是实例系统事件，不能是磁盘系统事件。
     * @example `SystemMaintenance.Reboot`
     */
    "InstanceEventType"?: string[];
    /**
     * 一个或多个资源ID。N的取值范围为1~100。参数的多个取值使用重复列表的形式。取值范围：
     * - 当`ResourceType=instance`时，资源ID表示ECS实例ID。
     * - 当`ResourceType=ddh`时，资源ID表示专有宿主机ID。
     * - 当`ResourceType=managedhost`时，资源ID表示智能全托管资源池中的物理机ID。
     * 如果不指定该参数，表示查询指定地域（`RegionId`）和指定资源类型（`ResourceType`）下，所有资源的系统事件信息。
     * > 推荐您使用`ResourceId.N`参数设置一个或多个资源ID。如果您同时指定了`ResourceId.N`参数和`InstanceId`参数，系统默认优先生效`ResourceId.N`参数。
     * @example `i-uf678mass4zvr9n1****`
     */
    "ResourceId"?: string[];
    /**
     * 系统事件支持的标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源所在的资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
