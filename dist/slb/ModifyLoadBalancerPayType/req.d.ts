interface ModifyLoadBalancerPayTypeRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例的ID。
    * @example `lb-test`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 实例的计费类型，取值：
    * * **PayOnDemand**：按量付费。
    * * **PrePay**：预付费。
    * @example `PrePay`
    */ "PayType"?: string;
    /**
    * 计费周期。
    * 取值：**year|month** 。
    * @example `month`
    */ "PricingCycle"?: string;
    /**
    * 计费时长。
    * * 如果**PricingCycle**为**month**，取值**1-9**。
    * * 如果**PricingCycle**为**year**，取值**1-3**。
    * @example `1`
    */ "Duration"?: number;
    /**
    * 是否自动付费。取值：**true|false**
    * - **true**：自动续费。
    * - **false（默认值）**：不自动续费。
    * @example `true`
    */ "AutoPay"?: boolean;
}
export { ModifyLoadBalancerPayTypeRequest };