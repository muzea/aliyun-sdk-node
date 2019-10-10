interface DescribeBandwidthLimitationRequest {
    /**
    * 目标地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例的计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
    * - PrePaid：预付费（包年包月）
    * - PostPaid：按量付费
    * 默认值：PostPaid
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 按量付费实例的抢占策略。取值范围：
    * - NoSpot：正常按量付费实例
    * - SpotWithPriceLimit：设置上限价格的抢占式实例
    * - SpotAsPriceGo：系统自动出价，最高按量付费价格
    * 默认值：NoSpot
    * 当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。
    * @example `NoSpot`
    */ "SpotStrategy"?: string;
    /**
    * 实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * @example `ecs.g5.large`
    */ "InstanceType"?: string;
    /**
    * 资源ID。当您将参数OperationType设置为Upgrade或者Downgrade时，参数ResourceId为必需参数。
    * @example `s-946ntx4xx`
    */ "ResourceId"?: string;
    /**
    * 查询不同操作方式的带宽规格限制。取值范围：
    * - Upgrade：升级带宽
    * - Downgrade：降级带宽
    * - Create：新建
    * 默认值：Create
    * @example `Upgrade`
    */ "OperationType"?: string;
}
export { DescribeBandwidthLimitationRequest };