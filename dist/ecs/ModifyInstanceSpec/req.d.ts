interface ModifyInstanceSpecRequest {
    "RegionId"?: string;
    /**
    * 指定的实例ID。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例的目标规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * @example `ecs.g5.large`
    */ "InstanceType"?: string;
    /**
    * 公网出带宽最大值，单位为Mbps（Megabit per second）。取值范围：0~100
    * @example `10`
    */ "InternetMaxBandwidthOut"?: number;
    /**
    * 公网入带宽最大值，单位为Mbps（Megabit per second）。取值范围：1~200
    * @example `200`
    */ "InternetMaxBandwidthIn"?: number;
    /**
    * 临时提升带宽的起始时间点。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-12-05T22:40:00Z`
    */ "Temporary.StartTime"?: string;
    /**
    * 临时提升带宽的截止时间点。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-12-05T22:40:00Z`
    */ "Temporary.EndTime"?: string;
    /**
    * 临时公网出带宽的最大值。取值范围：1~100
    * >为提高兼容性，请尽量使用其他参数。
    * @example `50`
    */ "Temporary.InternetMaxBandwidthOut"?: number;
    /**
    * 是否提交异步请求。
    * 默认值：false
    * @example `false`
    */ "Async"?: boolean;
    /**
    * 是否支持跨集群升级实例规格。默认值：false
    * 当参数`AllowMigrateAcrossZone`取值为true时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
    * 经典网络类型实例：
    *
    * * 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
    *
    * * 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
    * 专有网络VPC类型实例：对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
    * @example `false`
    */ "AllowMigrateAcrossZone"?: boolean;
    /**
    * 更换系统盘类型。该参数只有在从[已停售的实例规格](~~55263~~)升级到[正常售卖的实例规格族](~~25378~~)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。取值范围：
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * @example `cloud_ssd`
    */ "SystemDisk.Category"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
    */ "ClientToken"?: string;
}
export { ModifyInstanceSpecRequest };