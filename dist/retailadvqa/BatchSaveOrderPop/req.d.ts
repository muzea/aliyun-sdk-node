export interface BatchSaveOrderPopRequest {
    /**
     * 订单列表
     */
    "Orders"?: {
        /**
         * 渠道编码
         * @example `doudian`
         */
        ChannelCode: string;
        /**
         * 渠道用户openid
         * @example `1699b2b974d444e3aa489f96457ef204`
         */
        ChannelOpenId: string;
        /**
         * 订单编号
         * @example `testOpenOrderId`
         */
        OpenOrderId: string;
        /**
         * 买家id
         * @example `testBuyId`
         */
        buyerOpenUid: string;
        /**
         * 品牌id
         * @example `testOpenMerchantId`
         */
        OpenMerchantId: string;
        /**
         * 平台类型
         * @example `DOUDIAN`
         */
        PlatformType: string;
        /**
         * 支付金额(单位:分)
         * @example `10000`
         */
        OrderPayment: string;
        /**
         * 订单金额（单位：分）
         * @example `10000`
         */
        TotalFee: string;
        /**
         * 下单时间
         * @example `2023-12-20 12:12:12`
         */
        OrderCreateTime: string;
        /**
         * 支付时间
         * @example `2023-12-20 12:12:12
        `
         */
        PayTime: string;
        /**
         * 结束时间
         * @example `2023-12-20 12:12:12
        `
         */
        EndTime: string;
        /**
         * 店铺id
         * @example `testShopId`
         */
        ShopId: string;
        /**
         * 订单状态
         * @example `TRADE_FINISHED`
         */
        Status: string;
        /**
         * 扩展属性
         * @example `{\"扩展属性1\":\"featureData1\",\"扩展属性2\":\"featureData2\"}`
         */
        Feature: string;
        /**
         * 子单信息
         */
        SubOrderModelList: {
            /**
             * 子订单编号
             * @example `testSubOrderId`
             */
            OpenSubOrderId: string;
            /**
             * 订单金额（单位：分）
             * @example `10000`
             */
            TotalFee: string;
            /**
             * 支付金额（单位：分）
             * @example `10000`
             */
            OrderPayment: string;
            /**
             * 商品数量
             * @example `1`
             */
            ProductAmount: string;
            /**
             * 商品Id
             * @example `testProductld`
             */
            ProductId: string;
            /**
             * 外部商品id
             * @example `testOutProductId`
             */
            OutProductId: string;
            /**
             * 商品名
             * @example `testProductName`
             */
            ProductName: string;
            /**
             * 子订单状态
             * @example `TRADE_FINISHED`
             */
            Status: string;
            /**
             * 退款状态
             * @example `testRefundStatus`
             */
            RefundStatus: string;
            /**
             * 扩展属性
             * @example `{\"扩展属性1\":\"featureData1\",\"扩展属性2\":\"featureData2\"}`
             */
            Feature: string;
        }[];
    }[];
}
