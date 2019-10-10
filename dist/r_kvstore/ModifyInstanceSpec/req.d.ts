interface ModifyInstanceSpecRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-j6cxxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 变更后的实例规格，各规格的InstanceClass值请参见[实例规格表](~~107984~~)。
    * @example `redis.master.small.default`
    */ "InstanceClass"?: string;
    "FromApp"?: string;
    /**
    * 活动ID、业务信息。
    * @example `000000000`
    */ "BusinessInfo"?: string;
    /**
    * 优惠码，默认值：`youhuiquan_promotion_option_id_for_blank`。
    * @example `youhuiquan_promotion_option_id_for_blank`
    */ "CouponNo"?: string;
    /**
    * 是否强制变配，可选值：
    * * false（否）；
    * * true（是）。
    * > 默认值：true。
    * @example `true`
    */ "ForceUpgrade"?: boolean;
    /**
    * 变更执行时间，可选值：
    * * Immediately（立即执行）
    * * MaintainTime（运维时间执行）
    * 默认值：Immediately。
    * @example `Immediately`
    */ "EffectiveTime"?: string;
    /**
    * 是否自动付款，可选值：
    * * true（是）
    * * false（否）
    * 默认值：false。
    * > 当值为`false`时，请在实例即将到期时到控制台[手动续费](~~26352~~)。
    * @example `true`
    */ "AutoPay"?: boolean;
}
export { ModifyInstanceSpecRequest };