interface ListEmrAvailableResourceRequest {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 目标资源。
    * @example `Zone`
    */ "DestinationResource": string;
    /**
    * 集群类型。
    * @example `HADOOP`
    */ "ClusterType": string;
    /**
    * 付费类型。
    * @example `PostPaid`
    */ "InstanceChargeType": string;
    /**
    * 实例竞价策略：
    * - NoSpot
    * - SpotWithPriceLimit
    * - SpotAsPriceGo
    * @example `SpotWithPriceLimit`
    */ "SpotStrategy"?: string;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    /**
    * 网络类型。
    * @example `vpc`
    */ "NetType"?: string;
    /**
    * 实例类型。
    * @example `ecs.g5.xlarge`
    */ "InstanceType"?: string;
    /**
    * 系统盘类型。
    * @example `cloud_ssd`
    */ "SystemDiskType"?: string;
    /**
    * 数据盘类型。
    * @example `cloud_ssd`
    */ "DataDiskType"?: string;
    /**
    * 托管类型。
    * @example `HALF_MANAGED`
    */ "DepositType"?: string;
    /**
    * 集群ID。
    * @example `C-D7958B72E59BAB88`
    */ "ClusterId"?: string;
}
export { ListEmrAvailableResourceRequest };