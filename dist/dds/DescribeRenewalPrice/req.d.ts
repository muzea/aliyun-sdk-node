interface DescribeRenewalPriceRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 附加参数，业务信息。
    * @example `{“ActivityId":"000000000"}`
    */ "BusinessInfo"?: string;
    /**
    * 优惠码，默认为：**youhuiquan_promotion_option_id_for_blank**。
    * @example `youhuiquan_promotion_option_id_for_blank`
    */ "CouponNo"?: string;
}
export { DescribeRenewalPriceRequest };