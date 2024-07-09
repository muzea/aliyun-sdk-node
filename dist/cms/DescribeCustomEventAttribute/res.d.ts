export interface DescribeCustomEventAttributeResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `userId:173651113438**** and name:"BABEL_CHECK"`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `60912C8D-B340-4253-ADE7-61ACDFD25CFC`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    CustomEvents: {
        /**
         * 事件详情。
         */
        CustomEvent: {
            /**
             * 事件发生的时间。
             * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
             * @example `1552199984000`
             */
            Time: string;
            /**
             * 事件名称。
             * @example `BABEL_CHECK`
             */
            Name: string;
            /**
             * 应用分组ID。
             * @example `12345`
             */
            GroupId: string;
            /**
             * 上报事件详情。
             * @example `requestId:4975A6F3-19AC-4C01-BAD2-034DA07FEBB5, info:{"autoPay":false,"autoUseCoupon":false,"bid":"26842","buyerId":118935342242****,"commodities":[{"aliyunProduceCode":"cms","chargeType":"PREPAY","commodityCode":"cms_call_num","components":[{"componentCode":"phone_count","instanceProperty":[{"code":"phone_count","value":"500"}],"moduleAttrStatus":1}],"duration":6,"free":false,"orderParams":{"aliyunProduceCode":"cms"},"orderType":"BUY","prePayPostCharge":false,"pricingCycle":"Month","quantity":1,"refundSpecCode":"","renewChange":false,"specCode":"cms_call_num","specUpdate":false,"syncToSubscription":false,"upgradeInquireFinancialValue":true}],"fromApp":"commonbuy","orderParams":{"priceCheck":"true"},"payerId":118935342242****,"requestId":"ade3ad32-f58b-45d7-add4-ac542be3d8ec","skipChannel":false,"userId":118935342242****}`
             */
            Content: string;
            /**
             * 事件ID。
             * @example `123`
             */
            Id: string;
        }[];
    };
}
