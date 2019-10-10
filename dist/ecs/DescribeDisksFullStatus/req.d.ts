interface DescribeDisksFullStatusRequest {
    /**
    * 块存储所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "DiskId"?: string[];
    "EventId"?: string[];
    /**
    * 指定块存储的生命周期状态，参见[云盘状态表](~~25689~~)。取值范围：
    * - In_use：使用中
    * - Available：待挂载
    * - Attaching：挂载中
    * - Detaching：卸载中
    * - Creating：创建中
    * - ReIniting：初始化中
    *
    * @example `Available`
    */ "Status"?: string;
    /**
    * 指定块存储的健康状态。取值范围：
    * - Impaired：暂时性不可读写
    * - Warning：服务降级
    * - Initializing：初始化中
    * - InsufficientData：数据不足
    * - NotApplicable：不适用
    *
    * @example `Warning`
    */ "HealthStatus"?: string;
    /**
    * 指定块存储的事件类型。取值范围：
    * - Degraded：块存储性能降级
    * - SeverelyDegraded：块存储性能严重降级
    * - Stalled：块存储性能受到严重影响
    *
    * @example `Stalled`
    */ "EventType"?: string;
    /**
    * 查询事件发生时间的开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2018-05-06T02:43:10Z`
    */ "EventTime.Start"?: string;
    /**
    * 查询事件发生时间的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2018-05-08T02:48:52Z`
    */ "EventTime.End"?: string;
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
export { DescribeDisksFullStatusRequest };