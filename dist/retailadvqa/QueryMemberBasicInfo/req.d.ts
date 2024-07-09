export interface QueryMemberBasicInfoRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 商家加密品牌 ID
         * @example `750cff00c3e0996d220ac2861dafdfadsf`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `FENGXUAN`
         */
        PlatFormType: string;
        /**
         * 查询类型，支持使用会员id/手机号/渠道openId查询。枚举值：
         * 1-ChannelOpenId，仅支持ChannelCode为alipay/wechat时，ChannelOpenId
         * 必填，
         * 2-mobile，mobile必填
         * 3-OuterMemberId，OuterMemberId必填
         * @example `1`
         */
        Type: string;
        /**
         * 商家会员ID
         * @example `WMS_36606164948078_23218019`
         */
        OuterMemberId: string;
        /**
         * 手机号
         * @example `18888889999`
         */
        Mobile: string;
        /**
         * 渠道Code
         * @example `如：alipay`
         */
        ChannelCode: string;
        /**
         * 渠道openId
         * @example `750cff00c3e099`
         */
        ChannelOpenId: string;
    };
}
