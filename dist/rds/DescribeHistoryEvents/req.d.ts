export interface DescribeHistoryEventsRequest {
    /**
     * 地域ID。可调用[DescribeRegions](~~610399~~)获取。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 每页记录数。默认值：30。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过integer的最大值。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源状态，取值：***importing**：导入中。***failed**：导入失败。***checksuccess**：校验通过。***deleted**：已删除。
     * @example `deleted`
     */
    "ArchiveStatus"?: string;
    /**
     * 系统事件分类。详情请参见[历史事件](~~129759~~)。
     * @example `Exception`
     */
    "EventCategory"?: string;
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
     * > 事件类型说明请参见系统事件概述。该参数的取值只能是实例系统事件，不能是磁盘系统事件。
     * @example `SystemFailure.Reboot`
     */
    "EventType"?: string;
    /**
     * 事件级别，取值：***high**：高危***medium**：中危***low**：低危
     * @example `high`
     */
    "EventLevel"?: string;
    /**
     * 异常事件状态, 取值有：
     * - PENDING（1： 待处理）
     * - IGNORE（2： 已忽略）
     * - HANDLED（4： 已确认）
     * - FAULT（8： 已标记误报）
     * - DEALING（16： 处理中）
     * - DONE（32： 处理完毕）
     * - EXPIRE（64： 已经过期）
     * @example `1`
     */
    "EventStatus"?: string;
    /**
     * 资源类型。唯一取值：**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * RDS实例ID。
     * @example `rm-uf62br2491p5l****`
     */
    "InstanceId"?: string;
    /**
     * 事件ID。
     * @example `5345398`
     */
    "EventId"?: string;
    /**
     * 任务ID。获取指定任务ID数据。
     * @example `241535739`
     */
    "TaskId"?: string;
    /**
     * 任务开始时间的起始时间，表示查询任务开始时间在此时间之后的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。最早支持30天前，距当前时间超过30天会自动转换成30天前。
     * @example `2022-01-02T11:31:03Z`
     */
    "FromStartTime"?: string;
    /**
     * 任务开始时间的结束时间，表示查询任务开始时间在此时间之前的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-01-12T07:06:19Z`
     */
    "ToStartTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
