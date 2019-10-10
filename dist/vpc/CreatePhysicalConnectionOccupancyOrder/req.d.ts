interface CreatePhysicalConnectionOccupancyOrderRequest {
    /**
    * 物理专线所在的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 物理专线的实例ID。
    * @example `pc-bp1hp0wr072f6ambni141`
    */ "PhysicalConnectionId": string;
    /**
    * 购买时长。
    * @example `1`
    */ "Period"?: number;
    /**
    * 实例的付费方式。取值范围：
    * - PrePaid：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付/信用支付。
    * - PostPaid（默认）：按量付费。
    * @example `PostPaid`
    */ "InstanceChargeType"?: string;
    /**
    * 是否自动支付。取值范围：
    * - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
    * - false：只生成订单不扣费。
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 订购的周期单位。
    * - 年：Year。
    * - 月：Month。
    * @example `Month`
    */ "PricingCycle"?: string;
    "OwnerId"?: number;
    /**
    * 客户端Token鉴权。
    * @example `CBCE910E-D396-4944-8764-B4047838B2D1`
    */ "ClientToken"?: string;
}
export { CreatePhysicalConnectionOccupancyOrderRequest };