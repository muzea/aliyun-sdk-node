export interface CalculateMemberLevelRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         * 会员等级
         * @example `1`
         */
        CurrentGrade: number;
        /**
         * 等级名称
         * @example `黄金`
         */
        CurrentGradeName: string;
        /**
         * 会员ID
         * @example `4000006009418358`
         */
        MemberId: string;
        /**
         * 商户ID
         * @example `1230094`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `TAOBAO`
         */
        PlatformType: string;
        /**
         * 积分
         * @example `0`
         */
        Score: string;
        /**
         * 操作序列号
         * @example `0235b7f20a11de9e2bf4c3494b6d998d`
         */
        SerialNo: string;
    };
}
