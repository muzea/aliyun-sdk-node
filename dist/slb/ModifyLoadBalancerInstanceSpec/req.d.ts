interface ModifyLoadBalancerInstanceSpecRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例的规格。取值：
    *  - slb.s1.small
    *
    * - slb.s2.small
    * - slb.s2.medium
    * - slb.s3.small
    * - slb.s3.medium
    * - slb.s3.large
    * 每个地域支持的规格不同。关于每种规格的说明，参见[性能保障型实例](~~55193~~)。
    * <note>将共享型实例变更为保障型实例，SLB将有小概率可能性出现短暂的业务中断（10秒-30秒），建议您在业务低谷期进行变配，或者使用GSLB将业务调度至其他的SLB实例后，再进行变配操作。</note>
    * @example `slb.s2.small`
    */ "LoadBalancerSpec": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1b6c719dfa08exfuca5`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 是否自动付费。
    * - 取值为**true**则自动支付订单。
    * - 取值为**false**则需要在订单中心中进行支付。
    * > 仅对预付费实例有效。
    * @example `true`
    */ "AutoPay"?: boolean;
}
export { ModifyLoadBalancerInstanceSpecRequest };