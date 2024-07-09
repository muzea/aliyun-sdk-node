export interface DescribePriceResponse {
    /**
     * 限购编码
     * @example `ORDER.NO_REAL_NAME_AUTHENTICATION`
     */
    ExpressionCode: string;
    /**
     * 是否有促销
     * @example `true`
     */
    Cuxiao: boolean;
    /**
     * 优惠的价格（原价-实际价格），单位：元
     * @example `178.20`
     */
    DiscountPrice: number;
    /**
     * 周期单位
     * DAY：日
     * MONTH：月
     * YEAR：年
     * @example `MONTH`
     */
    Cycle: string;
    /**
     * 实际价格，单位：元
     * @example `19.80`
     */
    TradePrice: number;
    /**
     * 原价，单位：元
     * @example `198.00`
     */
    OriginalPrice: number;
    /**
     * 周期数， 1，2，3...
     * @example `1`
     */
    Duration: number;
    /**
     * 币种
     * CNY： 人民币
     * USD： 美元
     * JPY：日元
     * @example `CNY`
     */
    Currency: string;
    /**
     * 限购描述
     * @example `企业用户才能购买`
     */
    ExpressionMessage: string;
    /**
     * 活动名称
     * @example `新年特惠`
     */
    InfoTitle: string;
    /**
     * 商品 Code
     * @example `cmgj01****`
     */
    ProductCode: string;
    PromotionRules: {
        /**
         * 优惠信息
         */
        PromotionRule: {
            /**
             * 优惠标题
             * @example `展示型首年19.8元`
             */
            Title: string;
            /**
             * 优惠内容
             * @example `展示型首年19.8元`
             */
            Name: string;
            /**
             * 优惠ID
             * @example `102112`
             */
            RuleId: string;
        }[];
    };
    Coupons: {
        /**
         * 优惠券信息
         */
        Coupon: {
            /**
             * 优惠券类型
             * @example `ActiveCoupon`
             */
            CouponOptionCode: string;
            /**
             * 优惠券编号
             * @example `3874923111`
             */
            CouponOptionNo: string;
            /**
             * 优惠券名称
             * @example `促销`
             */
            CouponName: string;
            /**
             * 优惠券描述
             * @example `促销`
             */
            CouponDesc: string;
            /**
             * 是否选中
             * @example `false`
             */
            IsSelected: boolean;
            /**
             * 可优惠价格
             * @example `100.00`
             */
            CanPromFee: number;
        }[];
    };
}
