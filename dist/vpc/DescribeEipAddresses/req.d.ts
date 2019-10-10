interface DescribeEipAddressesRequest {
    /**
    * EIP所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "Tag"?: string[];
    "OwnerId"?: number;
    /**
    * 是否包含未生效的订购数据，默认是否。
    * @example `true`
    */ "IncludeReservationData"?: boolean;
    /**
    * EIP的状态，取值：
    * - **Associating**：绑定中。
    * - **Unassociating**：解绑中。
    * - **InUse**：已分配。
    * - **Available**：可用。
    * @example `Available`
    */ "Status"?: string;
    /**
    * EIP的IP地址。指定后可查看指定IP地址的EIP的信息。
    * @example `116.xx.xx.28`
    */ "EipAddress"?: string;
    /**
    *  EIP的ID。
    * @example `eip-2zeerraiwb7ujxxxxxxxx`
    */ "AllocationId"?: string;
    /**
    * 资源组ID。
    * @example `rg-acfmxazb4pxxxxxxxx`
    */ "ResourceGroupId"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `10`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 服务提供商，大部分是BGP。
    * @example `BGP`
    */ "ISP"?: string;
    /**
    * 要使用的过滤条件。
    * @example `Filter.1.Name`
    */ "Filter.1.Key"?: string;
    /**
    * 要使用的过滤条件。
    * @example `Filter.2.Description`
    */ "Filter.2.Key"?: string;
    /**
    * 对应过滤条件的取值。
    * @example `value1`
    */ "Filter.1.Value"?: string;
    /**
    * 对应过滤条件的取值。
    * @example `value2`
    */ "Filter.2.Value"?: string;
    /**
    * 锁定类型，取值：
    * - **financial**：因欠费被锁定。
    * - **security**：因安全原因被锁定。
    * @example `financial`
    */ "LockReason"?: string;
    /**
    * 要绑定的云产品实例的类型，取值：
    * - **EcsInstance**（默认值）：VPC类型的ECS实例。
    * - **SlbInstance**：VPC类型的SLB实例。
    * - **Nat**：NAT网关。
    * - **HaVip**：高可用虚拟IP。
    *
    * 每个ECS实例、负载均衡实例和HAVIP同时只能绑定一个EIP，NAT网关可以绑定多个EIP。
    * @example `EcsInstance`
    */ "AssociatedInstanceType"?: string;
    /**
    *  云产品的实例ID。
    * @example `i-2zebb08phycxxxxxxxx`
    */ "AssociatedInstanceId"?: string;
    /**
    * 弹性公网IP的计费方式，取值：
    * **PostPaid**：按量计费。
    * **PrePaid**：包年包月。
    * @example `PostPaid`
    */ "ChargeType"?: string;
}
export { DescribeEipAddressesRequest };