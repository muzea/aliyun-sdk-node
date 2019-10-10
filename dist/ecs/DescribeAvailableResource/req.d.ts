interface DescribeAvailableResourceRequest {
    /**
    * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要查询的资源类型。取值范围：
    *
    * - Zone：可用区
    * - IoOptimized：I/O优化
    * - InstanceType：实例规格
    * - SystemDisk：系统盘
    * - DataDisk：数据盘
    * - Network：网络类型
    * - ddh：专有宿主机
    *
    * @example `InstanceType`
    */ "DestinationResource": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 资源的计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
    *
    * - PrePaid：包年包月
    * - PostPaid：按量付费
    * 默认值：PostPaid。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 按量付费实例的竞价策略。取值范围：
    *
    * - NoSpot：正常按量付费实例
    * - SpotWithPriceLimit：设置上限价格的抢占式实例
    * - SpotAsPriceGo：系统自动出价，最高按量付费价格
    * 默认值：NoSpot。
    * 当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。
    * @example `NoSpot`
    */ "SpotStrategy"?: string;
    "SpotDuration"?: number;
    /**
    * 可用区ID。
    * 默认值：无，表示随机分配当前地域下的可用区。
    * @example `cn-hangzhou-e`
    */ "ZoneId"?: string;
    /**
    * 是否为I/O优化实例。取值范围：
    *
    * - none：非I/O优化实例
    * - optimized：I/O优化实例
    * 若参数DestinationResource取值为SystemDisk、InstanceType或者DataDisk时，参数IoOptimized不是必需参数。
    * 默认值：optimized。
    * @example `optimized`
    */ "IoOptimized"?: string;
    /**
    * 专有宿主机ID。
    * @example `dh-dedicatedhostid`
    */ "DedicatedHostId"?: string;
    /**
    * 实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * 当参数DestinationResource取值为SystemDisk或者DataDisk时，InstanceType为必需参数。
    * @example `ecs.g5.large`
    */ "InstanceType"?: string;
    /**
    * 系统盘类型。取值范围：
    *
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * 若参数DestinationResource取值为SystemDisk、InstanceType或者DataDisk时，参数SystemDiskCategory不是必需参数。
    * 默认值：cloud_efficiency。
    * @example `cloud_ssd`
    */ "SystemDiskCategory"?: string;
    /**
    * 数据盘类型。取值范围：
    *
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * @example `cloud_ssd`
    */ "DataDiskCategory"?: string;
    /**
    * 网络类型。取值范围：
    *
    * - vpc：专有网络
    * - classic：经典网络
    *
    * @example `vpc`
    */ "NetworkCategory"?: string;
    /**
    * 实例规格的vCPU内核数目。取值参见[实例规格族](~~25378~~)。
    * 当DestinationResource取值为InstanceType时，Cores才为有效参数。
    * @example `2`
    */ "Cores"?: number;
    /**
    * 实例规格的内存大小，单位为GiB。取值参见[实例规格族](~~25378~~)。
    * 当DestinationResource取值为InstanceType时，Memory才为有效参数。
    * @example `8.0`
    */ "Memory"?: number;
    /**
    * 资源类型。取值范围：
    * - instance：ECS实例
    * - disk：云盘
    * - reservedinstance：预留实例券
    * - ddh：专有宿主机
    * @example `Instance`
    */ "ResourceType"?: string;
    /**
    * @example `NoDisclose`
    */ "Scope"?: string;
}
export { DescribeAvailableResourceRequest };