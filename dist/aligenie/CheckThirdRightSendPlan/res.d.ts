export interface CheckThirdRightSendPlanResponse {
    /**
     * 返回code
     * @example `0`
     */
    RetCode: number;
    /**
     * 错误信息
     * @example `系统异常`
     */
    RetMsg: string;
    /**
     * 调用接口的结果
     */
    RetValue: {
        /**
         * 卡种
         * @example `1001 日卡 1002 月卡 1003 季卡 1004 年卡`
         */
        CardType: number;
        /**
         * 权益失效时间
         * @example `"1713262192005"`
         */
        RightsExpiredDate: string;
        /**
         * 激活时间
         * @example `"1713262192005"`
         */
        ActivateDate: string;
        /**
         * 渠道code
         * @example `TB`
         */
        ChannelCode: string;
        /**
         * 渠道名称
         * @example `淘宝`
         */
        ChannelName: string;
        /**
         * 请求iid
         * @example `908FA068-529C-0C20-8DB5-63B0EF7CFF1F`
         */
        RequestId: string;
        /**
         * 扩展字段
         * @example `{}`
         */
        ExtendInfo: any;
    };
}
