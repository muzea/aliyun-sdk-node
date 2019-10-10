interface DescribeSpotPriceHistoryRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 抢占式实例网络类型。取值范围：
    * - classic：表示抢占式实例的网络类型为经典网络。
    * - vpc：表示抢占式实例的网络类型为专有网络。
    * @example `vpc`
    */ "NetworkType": string;
    /**
    * 实例规格。
    * @example `ecs.t1.xsmall`
    */ "InstanceType": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    "SpotDuration"?: number;
    /**
    * 是否为I/O优化实例。取值范围：
    * - optimized：表示抢占式实例为I/O优化实例
    * - none：表示抢占式实例为非I/O优化实例
    * 系列I实例默认值：none
    * 系列II实例默认值：optimized系列III实例默认值：optimized
    * @example `none`
    */ "IoOptimized"?: string;
    /**
    * 查询抢占式实例历史价格的起始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * 默认为空，空代表结束时间前3小时，最大值不得超过指定的结束时间30天。
    * @example `2017-08-22T08:45:08Z`
    */ "StartTime"?: string;
    /**
    * 查询抢占式实例历史价格的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * 默认为空，空表示当前时间。
    * @example `2017-08-22T08:45:08Z`
    */ "EndTime"?: string;
    /**
    * 操作系统的发行平台类型。
    * @example `linux`
    */ "OSType"?: string;
    /**
    * 查询开始行。
    * 默认值：0。
    * @example `0`
    */ "Offset"?: number;
}
export { DescribeSpotPriceHistoryRequest };