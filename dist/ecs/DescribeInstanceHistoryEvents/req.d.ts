interface DescribeInstanceHistoryEventsRequest {
    /**
    * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例ID。不指定实例ID时，表示查询您指定地域下所有实例的系统事件信息。
    * @example `i-myInstance`
    */ "InstanceId"?: string;
    "EventId"?: string[];
    "InstanceEventCycleStatus"?: string[];
    /**
    * 系统事件的生命周期状态。EventCycleStatus只在未指定InstanceEventCycleStatus.N参数时有效。取值范围：
    * - Scheduled
    * - Avoided
    * - Executing
    * - Executed
    * - Canceled
    * - Failed
    * - Inquiring
    *
    * @example `Executed`
    */ "EventCycleStatus"?: string;
    "InstanceEventType"?: string[];
    /**
    * 系统事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围：
    * - SystemMaintenance.Reboot：因系统维护实例重启
    * - SystemMaintenance.Redeploy：因系统维护实例重新部署
    * - SystemFailure.Reboot：因系统错误实例重启
    * - SystemFailure.Redeploy：因系统错误实例重新部署
    * - SystemFailure.Delete：因实例创建失败实例释放
    * - InstanceFailure.Reboot：因实例错误实例重启
    * - InstanceExpiration.Stop：因包年包月期限到期，实例停止
    * - InstanceExpiration.Delete：因包年包月期限到期，实例释放
    * - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止
    * - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放
    *
    * @example `SystemMaintenance.Reboot`
    */ "EventType"?: string;
    /**
    * 查询系统事件计划执行时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-11-30T06:32:31Z`
    */ "NotBefore.Start"?: string;
    /**
    * 查询系统事件计划执行时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-12-01T06:32:31Z`
    */ "NotBefore.End"?: string;
    /**
    * 查询系统事件发布时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-11-30T06:32:31Z`
    */ "EventPublishTime.Start"?: string;
    /**
    * 查询系统事件发布时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-12-01T06:32:31Z`
    */ "EventPublishTime.End"?: string;
    /**
    * 查询结果的页码。取值范围：正整数
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 查询结果的分页大小。取值范围：1~100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeInstanceHistoryEventsRequest };