interface CreateSmartAccessGatewaySoftwareRequest {
    /**
    * 智能接入网关APP实例的地域。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 每个账号下套餐的使用时长，按月计算。如果取值超过12，必须是12的倍数。
    * @example `12`
    */ "Period": number;
    /**
    * 是否是自动支付预付费实例的账单。
    * 取值：**true|false**
    * 默认值：**false**。
    * @example `true`
    */ "AutoPay": boolean;
    /**
    * 实例的计费类型，取值：
    * - PayOnDemand：按量付费
    * - PREPAY：预付费
    * > 目前只支持预付费。
    * @example `PREPAY`
    */ "ChargeType": string;
    /**
    * APP账号数规格，购买后可创建相应数量的账号，一般为每个需要登录的员工创建一个账号。
    * @example `5`
    */ "UserCount": number;
    /**
    * 每个账号每月赠送的流量套餐规格，单位G。
    * > 目前仅支持购买5GB/月套餐。
    * @example `5`
    */ "DataPlan": number;
    "OwnerId"?: number;
}
export { CreateSmartAccessGatewaySoftwareRequest };