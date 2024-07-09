export interface MemberPointChangeRequest {
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
         * 商家会员ID
         * @example `WMS_36606164948078_23218019`
         */
        OuterMemberId: string;
        /**
         * 积分/成长值变更数值
         * @example `1`
         */
        Quantity: string;
        /**
         * 账户类型：20-积分;30-成长值
         * @example `20`
         */
        AccountType: string;
        /**
         * 变更类型：1-增加，2-扣减
         * @example `1`
         */
        OperateType: string;
        /**
         * 操作序列号
         * @example `4LJDNJH9JUX48L41`
         */
        SerialNo: string;
        /**
         * 渠道Code
         * @example `如：alipay`
         */
        ChannelCode: string;
        /**
         * 其他
         * @example `""`
         */
        Extra: string;
    };
}
