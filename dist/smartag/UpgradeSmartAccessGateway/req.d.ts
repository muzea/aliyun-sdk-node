interface UpgradeSmartAccessGatewayRequest {
    /**
    * 智能接入网关的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-d3m51apgw4po******`
    */ "SmartAGId": string;
    /**
    * 是否是自动支付预付费实例的账单。
    * 取值：**true|false**（默认值）
    * @example `true`
    */ "AutoPay": boolean;
    /**
    * 智能接入网关的带宽。
    * - 如果网关设备规格为sag-100wm，带宽取值：2~50Mbps
    *
    * - 如果网关设备规格为sag-1000，带宽取值：10~500Mbps
    * @example `3`
    */ "BandWidthSpec"?: number;
    "OwnerId"?: number;
    /**
    * 账户流量套餐规格，单位G。
    * @example `5`
    */ "DataPlan"?: number;
    /**
    * 可创建账号数量。
    * @example `10`
    */ "UserCount"?: number;
}
export { UpgradeSmartAccessGatewayRequest };