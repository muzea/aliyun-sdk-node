export interface SyncMemberBehaviorInfoRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 加密商家ID
         * @example `750cff00c3e0996d220ac2861dafdfadsf`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `如：FENGXUAN`
         */
        PlatFormType: string;
        /**
         * 商家会员ID
         * @example `WMS_36606164948078_23218019`
         */
        OuterMemberId: string;
        /**
         * 行为类型：（sign-签到medal-勋章questionnaire-问卷）
         * @example `sign`
         */
        ActionType: string;
        /**
         * 行为子类型
         * @example `...`
         */
        ActionSubType: string;
        /**
         * 行为产生日期
         * @example `2023-01-01 00:00:00`
         */
        ActionStartDate: string;
        /**
         * 行为结束日期
         * @example `2023-01-01 00:00:00`
         */
        ActionEndDate: string;
        /**
         * 行为结果：ture/false
         * @example `true
        `
         */
        ActionResult: boolean;
        /**
         * 持续时间：秒
         * @example `18`
         */
        ActionDuration: string;
        /**
         * 其他
         * @example `...`
         */
        Extra: string;
    };
}
