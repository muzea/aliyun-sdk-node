interface DowngradeSmartAccessGatewayRequest {
    /**
    * 智能接入网关的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-nylv14tghsk26c*****`
    */ "SmartAGId": string;
    /**
    * 是否是自动支付预付费实例的账单，默认值是**false**。
    * @example `true`
    */ "AutoPay": boolean;
    /**
    * 智能接入网关的带宽。
    *
    * - 如果网关设备规格为sag-100wm，带宽取值：2~50Mbps
    *
    * - 如果网关设备规格为sag-1000，带宽取值：10~500Mbps
    * @example `20`
    */ "BandWidthSpec"?: number;
    "OwnerId"?: number;
    /**
    * 每个账号赠送的流量套餐规格，单位G。
    * > 目前仅支持购买5GB/月套餐。
    * @example `5`
    */ "DataPlan"?: number;
    /**
    * APP账号数规格，购买后可创建相应数量的账号，一般为每个需要登陆的员工创建一个账号。
    * @example `5`
    */ "UserCount"?: number;
}
export { DowngradeSmartAccessGatewayRequest };