export interface SyncCardInfoRequest {
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
         * 赠送单号
         * @example `3eecd2b8a6f946ca`
         */
        TransferId: string;
        /**
         * 购买订单号
         * @example `223332140970453`
         */
        OrderId: string;
        /**
         * 购买用户ID
         * @example `1236437142867408`
         */
        BuyerId: string;
        /**
         * 收礼人
         */
        Recipient: {
            /**
             * 收礼人ID
             * @example `1000030855004`
             */
            Id: string;
            /**
             * 收礼人手机号
             * @example `18899998888`
             */
            Phone: string;
            /**
             * openId
             * @example `1179ead68b3833fea61a802ddb1dd3ac`
             */
            OpenId: string;
            /**
             * 收礼人昵称
             * @example `大大`
             */
            Nickname: string;
            /**
             * 头像
             * @example `https://xxx/1.jpg`
             */
            HeaderImg: string;
        };
        /**
         * 赠礼人
         */
        Gifters: {
            /**
             * 赠礼人ID
             * @example `1000030820003`
             */
            Id: string;
            /**
             * 赠礼人手机号
             * @example `13277778888`
             */
            Phone: string;
            /**
             * openId
             * @example `82ace612cd377134d597e32e91562caf`
             */
            OpenId: string;
            /**
             * 赠礼人昵称
             * @example `小小`
             */
            Nickname: string;
            /**
             * 头像
             * @example `https://xxx/2.jpg`
             */
            HeaderImg: string;
        };
        /**
         * 状态，1-未领取2-已领取3-已退卡4-已失效
         * @example `1`
         */
        Status: string;
        /**
         * 礼品卡名称
         * @example `礼品a`
         */
        Theme: string;
        /**
         * 赠送时间，格式:yyyy-MM-dd HH:mm:ss
         * @example `2023-05-12 00:00:00`
         */
        TransferredAt: string;
        /**
         * 接收时间，格式:yyyy-MM-dd HH:mm:ss
         * @example `2023-05-12 00:00:00`
         */
        ReceivedAt: string;
        /**
         * 商品详情
         */
        PresentDetail: {
            /**
             * 商品ID
             * @example `608356956277`
             */
            ItemId: string;
            /**
             * 商品金额
             * @example `89.5`
             */
            Price: number;
            /**
             * 商品名称
             * @example `A商品`
             */
            Name: string;
            /**
             * 商品数量
             * @example `0`
             */
            Count: number;
            /**
             * SKU
             * @example `4747141632519`
             */
            SkuId: string;
        }[];
        /**
         * 系统记录时间，格式:yyyy-MM-dd HH:mm:ss
         * @example `2023-05-12 00:00:00`
         */
        OccurredAt: string;
        /**
         * 其他
         * @example `""`
         */
        Extra: string;
    };
}
