interface DescribePriceRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 目标资源的类型。取值范围：
    * - instance：查询ECS实例的最新价格列表
    * - disk：查询云盘的最新价格列表
    * - bandwidth：查询带宽的最新价格列表
    * 默认值：instance
    * @example `instance`
    */ "ResourceType"?: string;
    /**
    * 镜像ID，表示启动实例时希望装载的运行环境。您可以调用[DescribeImages](~~25534~~)查询您可用的镜像资源。如果不指定，默认查询Linux系统镜像的价格。
    * @example `centos_7_05_64_20G_alibase_20181212.vhd`
    */ "ImageId"?: string;
    /**
    * 实例的资源规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * @example `ecs.n1.tiny`
    */ "InstanceType"?: string;
    /**
    * 查询的实例是否为I/O优化实例。取值范围：
    * - none：非I/O优化。
    * - optimized：I/O优化。
    * InstanceType为[系列I](~~55263~~)的规格时，默认值：none
    * InstanceType为非[系列I](~~55263~~)的规格时，默认值：optimized
    * @example `none`
    */ "IoOptimized"?: string;
    /**
    * 实例的网络类型。取值范围：
    * - classic：实例的网络类型为经典网络（Classic）
    * - vpc：实例的网络类型为专有网络（VPC）
    * 默认值：vpc
    * @example `vpc`
    */ "InstanceNetworkType"?: string;
    /**
    * 网络带宽计费方式。取值范围：
    * - PayByBandwidth：按固定带宽计费
    * - PayByTraffic：按带宽流量计费
    * 默认值：PayByTraffic
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
    /**
    * 公网出带宽最大值，单位为Mbps（Megabit per second）。取值范围：0~100
    * 默认值：0
    * @example `5`
    */ "InternetMaxBandwidthOut"?: number;
    /**
    * 系统盘的云盘种类。取值范围：
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * InstanceType为[已停售的实例规格](~~55263~~)的规格且参数IoOptimized取值为none时，默认值：cloud。
    * 其余情况，默认值：cloud_efficiency。
    * @example `cloud_ssd`
    */ "SystemDisk.Category"?: string;
    /**
    * 系统盘大小，单位为GiB。取值范围：20~500
    * 该参数的取值必须大于或者等于max{20, ImageSize}。默认值：max{40, 参数ImageId对应的镜像大小}
    * @example `80`
    */ "SystemDisk.Size"?: number;
    /**
    * 系统盘类型为ESSD云盘时，区分性能等级。仅当`SystemDiskCategory=cloud_essd`时该参数有效。取值范围：
    * - PL1（默认）
    * - PL2
    * - PL3
    * @example `PL1`
    */ "SystemDisk.PerformanceLevel"?: string;
    /**
    * 第一块数据盘的容量大小，内存单位为GiB。取值范围：
    * - cloud：5~2000
    * - cloud_efficiency：20~32768
    * - cloud_ssd：20~32768
    * - cloud_essd：20~32768
    * - ephemeral_ssd：5~800
    * @example `2000`
    */ "DataDisk.1.Size"?: number;
    /**
    * 第一块数据盘的云盘种类。取值范围：
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * @example `cloud_ssd`
    */ "DataDisk.1.Category"?: string;
    /**
    * 第一块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.1.Category=cloud_essd`时该参数有效。取值范围：
    * - PL1（默认）
    * - PL2
    * - PL3
    * @example `PL1`
    */ "DataDisk.1.PerformanceLevel"?: string;
    /**
    * 第二块数据盘的容量大小，内存单位为GiB。取值范围：
    * - cloud：5~2000
    * - cloud_efficiency：20~32768
    * - cloud_ssd：20~32768
    * - cloud_essd：20~32768
    * - ephemeral_ssd：5~800
    * @example `200`
    */ "DataDisk.2.Size"?: number;
    /**
    * 第二块数据盘的云盘种类。取值范围：
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * @example `cloud_ssd`
    */ "DataDisk.2.Category"?: string;
    /**
    * 第二块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.2.Category=cloud_essd`时该参数有效。取值范围：
    * - PL1（默认）
    * - PL2
    * - PL3
    * @example `PL1`
    */ "DataDisk.2.PerformanceLevel"?: string;
    /**
    * 第三块数据盘的容量大小，内存单位为GiB。取值范围：
    * - cloud：5~2000
    * - cloud_efficiency：20~32768
    * - cloud_ssd：20~32768
    * - cloud_essd：20~32768
    * - ephemeral_ssd：5~800
    * @example `2000`
    */ "DataDisk.3.Size"?: number;
    /**
    * 第三块数据盘的云盘种类。取值范围：
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * @example `cloud_ssd`
    */ "DataDisk.3.Category"?: string;
    /**
    * 第三块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.3.Category=cloud_essd`时该参数有效。取值范围：
    * - PL1（默认）
    * - PL2
    * - PL3
    * @example `PL1`
    */ "DataDisk.3.PerformanceLevel"?: string;
    /**
    * 第四块数据盘的容量大小，内存单位为GiB。取值范围：
    * - cloud：5~2000
    * - cloud_efficiency：20~32768
    * - cloud_ssd：20~32768
    * - cloud_essd：20~32768
    * - ephemeral_ssd：5~800
    * @example `2000`
    */ "DataDisk.4.Size"?: number;
    /**
    * 第四块数据盘的云盘种类。取值范围：
    * - cloud：普通云盘
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * - ephemeral_ssd：本地SSD盘
    * - cloud_essd：ESSD云盘
    * @example `cloud_ssd`
    */ "DataDisk.4.Category"?: string;
    /**
    * 第四块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.4.Category=cloud_essd`时该参数有效。取值范围：
    * - PL1（默认）
    * - PL2
    * - PL3
    * @example `PL1`
    */ "DataDisk.4.PerformanceLevel"?: string;
    /**
    * 云服务器ECS的计费时长。取值范围：
    * - 当参数PriceUnit取值为Month时：1~9
    * - 当参数PriceUnit取值为Year时：1~3
    * - 当参数PriceUnit取值为Hour时：1
    * 默认值：1
    * @example `1`
    */ "Period"?: number;
    /**
    * 查询云服务器ECS不同计费周期的价格。取值范围：
    * - Month：按月计费的价格单位
    * - Year：按年计费的价格单位
    * - Hour（默认）：按小时计费的价格单位
    * - Week：按周计费的价格单位
    * @example `Year`
    */ "PriceUnit"?: string;
    /**
    * 查询批量购买某种配置的云服务器ECS的价格。取值范围：1~1000
    * 默认值：1
    * @example `1`
    */ "Amount"?: number;
    "OfferingType"?: string;
    "InstanceAmount"?: number;
    "Scope"?: string;
    "Platform"?: string;
    "Capacity"?: number;
}
export { DescribePriceRequest };