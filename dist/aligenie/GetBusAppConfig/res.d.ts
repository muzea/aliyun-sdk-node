export interface GetBusAppConfigResponse {
    /**
     * 返回的错误码，0表示成功。
     * @example `	0`
     */
    RetCode: number;
    /**
     * 返回的错误信息，成功则不返回信息。
     * @example `	请求异常`
     */
    RetMsg: string;
    /**
     * 配置信息(VIP标、导购条、导购弹窗)
     */
    RetValue: {
        /**
         * VIP透标URL
         * @example `https://******.com/design/******?imageId=xxxxx`
         */
        VipLabel: string;
        /**
         * 导购条URL
         * @example `https://******.com/design/******?imageId=xxxxx`
         */
        ShoppingBar: string;
        /**
         * 导购弹窗URL
         * @example `https://******.com/design/******?imageId=xxxxx`
         */
        ShoppingWindow: string;
        /**
         * 收银台URL
         * @example `https://******.com/*****​/******?appId=xxxxx`
         */
        Cashier: string;
    };
}
