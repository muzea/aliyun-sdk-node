interface ModifyDBInstancePayTypeRequest {
    "RegionId"?: string;
    /**
    * 实例名。
    * @example ` rm-bp1842vmucoa5w874`
    */ "DBInstanceId": string;
    /**
    * 选择的付费类型为Prepaid，需要指定续费实例为包年或者包月类型，Year：包年；Month：包月。
    * @example `Year`
    */ "Period": string;
    "OwnerId"?: number;
    /**
    * 用于保证幂等性。
    * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
    */ "ClientToken"?: string;
    /**
    * 当参数Period为Year时，UsedTime可取值为[1,9]。
    * 当参数Period为Month时，UsedTime可取值为1、2、3。
    * @example `2`
    */ "UsedTime"?: number;
    /**
    * 付费类型，取值如下：
    * Postpaid:按量付费；
    * Prepaid：预付费。
    * @example `Prepaid`
    */ "PayType"?: string;
    /**
    * 是否自动支付。AutoPay 为 true 表示自动支付，账户余额不足的时候会生成无法支付的订单，需要登录控制台作废订单。AutoPay 为 false 时会生成未支付的订单，可登录控制台支付。取值范围：
    * true
    * false
    * 默认值：true
    * @example `true`
    */ "AutoPay"?: string;
    /**
    * 资源
    * @example `无`
    */ "Resource"?: string;
    /**
    * 座席ID
    * @example `无`
    */ "AgentId"?: string;
    /**
    * 无
    * @example `	 无`
    */ "BusinessInfo"?: string;
}
export { ModifyDBInstancePayTypeRequest };