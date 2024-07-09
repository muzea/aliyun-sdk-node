export interface ListCouponUsageRequest {
    /**
     * 阿里云客户账号
     * @example `oqevfbveuadcrduzmf@ttirv.net`
     */
    "Account"?: string;
    /**
     * 优惠券状态 </br>
     * AVAILABLE 正常 </br>
     * EXHAUSTED 已用完 </br>
     * EXPIRED 已过期 </br>
     * ABANDONED 已作废 </br>
     * @example `AVAILABLE`
     */
    "Status"?: string;
    /**
     * 页码</br>
     *  默认值为1 最小值1
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页行数 </br>
     *   默认值20 最大值50 最小值1
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 阿里云账号uid
     * @example `1133166938931507`
     */
    "Uid"?: number;
    /**
     * 优惠券模版id
     * @example `5075915`
     */
    "CouponTemplateId"?: number;
}
