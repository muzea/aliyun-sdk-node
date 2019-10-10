interface CreateSimulatedSystemEventsRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "InstanceId": string[];
    /**
    * 系统事件的类型。取值范围：
    * - SystemMaintenance.Reboot：因系统维护实例重启
    * - SystemFailure.Reboot：因系统错误实例重启
    * - InstanceFailure.Reboot：因实例错误实例重启
    *
    * @example `SystemMaintenance.Reboot`
    */ "EventType": string;
    /**
    * 事件计划执行的开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2018-12-01T06:32:31Z`
    */ "NotBefore": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { CreateSimulatedSystemEventsRequest };