interface AllocateDedicatedHostsRequest {
    /**
    * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](~~93285~~)接口获得最新的专有宿主机规格表 。
    * @example `ddh.c5`
    */ "DedicatedHostType": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
    "Tag"?: string[];
    /**
    * 专有宿主机要加入的资源组ID。
    * @example `myResourceGroupID`
    */ "ResourceGroupId"?: string;
    /**
    * 专有宿主机所属的可用区编号。
    * 默认值：空，表示由系统选择。
    * @example `cn-hangzhou-f`
    */ "ZoneId"?: string;
    /**
    * 专有宿主机的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `myDDH`
    */ "DedicatedHostName"?: string;
    /**
    * 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：
    * - Migrate：迁移实例到其他物理机并重新启动实例。
    *   默认值：Migrate（当专有宿主机上挂载云盘存储时）
    * - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。
    *   默认值：Stop（当专有宿主机上挂载本地盘存储时）
    * @example `Migrate`
    */ "ActionOnMaintenance"?: string;
    /**
    * 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310
    * @example `60`
    */ "NetworkAttributes.SlbUdpTimeout"?: number;
    /**
    * 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310
    * @example `60`
    */ "NetworkAttributes.UdpTimeout"?: number;
    /**
    * 专有宿主机的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * @example `This-is-my-DDH`
    */ "Description"?: string;
    /**
    * 专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云将自动从加入资源池的专有宿主机中，为您选取适合的宿主机部署实例，详情请参见[自动部署功能介绍](~~118938~~)。取值范围：
    * - on：加入自动部署资源池。
    * - off：不加入自动部署资源池。
    * 默认值： on
    *  >创建专有宿主机时：
    * - 若您不设置该参数，则默认为专有宿主机加入自动部署资源池。
    * - 若您不希望专有宿主机加入自动部署资源池，请将该参数设置为off。
    * @example `off`
    */ "AutoPlacement"?: string;
    /**
    * 专有宿主机的计费方式。取值范围：PrePaid（包年包月）
    * @example `PrePaid`
    */ "ChargeType"?: string;
    /**
    * 本次创建的专有宿主机的数量。取值范围：1~100
    * 默认值：1
    * @example `1`
    */ "Quantity"?: number;
    /**
    * 购买专有宿主机的包年包月时长。当参数**ChargeType**取值为PrePaid时， **Period**参数方可生效并为必填参数。
    * 使用中国站账号调用该API时，参数**Period**的取值范围如下：
    * - `PeriodUnit=Week`时，取值范围：{1,2,3}
    * - `PeriodUnit=Month`时，取值范围：{1,2,3,4,5,6,7,8,9}
    * - `PeriodUnit=Year`时，取值范围：{1,2,3,4,5}
    * 使用国际站账号调用该API时，参数**Period**的取值范围如下：
    * - `PeriodUnit=Month`时，取值范围：{1,2,3,6}
    * - `PeriodUnit=Year`时，取值范围：{1}
    * @example `6`
    */ "Period"?: number;
    /**
    * 购买专有宿主机的时长。取值范围：Week | Month（默认）| Year
    *
    * @example `Month`
    */ "PeriodUnit"?: string;
    /**
    * 是否自动续费包年包月专有宿主机。
    * >当参数**ChargeType**取值PrePaid时， **AutoRenew**参数方可生效。
    * 默认值：false
    * @example `false`
    */ "AutoRenew"?: boolean;
    /**
    * 单次自动续费的周期，单位：月。取值范围：1 | 2 | 3 | 6 | 12
    * >当参数**AutoRenew**为true时，**AutoRenewPeriod**参数方可生效并为必填参数。
    * @example `1`
    */ "AutoRenewPeriod"?: number;
    /**
    * 专有宿主机自动释放时间。需按照ISO8601标准表示，并使用UTC+0时间。格式：yyyy-MM-ddTHH:mm:ssZ
    * >
    * - 最短设置为当前时间之后半小时。
    * - 最长不能超过当前时间之后三年。
    * - 若参数值中的秒（ss）不是00，则自动取为00。
    * @example `2019-08-21T12:30:24Z`
    */ "AutoReleaseTime"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
}
export { AllocateDedicatedHostsRequest };