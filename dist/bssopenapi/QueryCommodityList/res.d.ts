export interface QueryCommodityListResponse {
    /**
     * Id of the request
     * @example `CC706AAC-75A6-55B5-9AB7-7D171C6C7655`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `NotApplicable`
     */
    Code: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 商品列表。
         */
        CommodityList: {
            /**
             * 商品code，与费用中心产品明细code一致
             * @example `ecs`
             */
            CommodityCode: string;
            /**
             * 商品名称。
             * @example `云服务器（按量付费）`
             */
            CommodityName: string;
            /**
             * 付款类型：-POSTPAY：按量付款-PREPAY：包年包月
             * @example `POSTPAY`
             */
            ChargeType: string;
        }[];
    };
}
