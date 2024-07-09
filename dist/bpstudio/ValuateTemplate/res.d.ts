export interface ValuateTemplateResponse {
    /**
     * 错误信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `847C9D0A-BABD-589C-8A9C-6464409EDED9`
     */
    RequestId: string;
    /**
     * 询价结果
     */
    Data: {
        /**
         * 询价返回结果集
         */
        ResourceList: {
            /**
             * 资源类型
             * @example `ecs`
             */
            NodeType: string;
            /**
             * 询价错误信息
             * @example `InvalidSaleComponentFault : The request not refer to the correct order sale component.`
             */
            Error: string;
            /**
             * 交易金额
             * @example `10.0`
             */
            TradePrice: number;
            /**
             * 减免金额
             * @example `73.0`
             */
            DiscountAmount: number;
            /**
             * 原价
             * @example `83.0`
             */
            OriginalPrice: number;
            /**
             * 优惠信息
             * @example `优惠信息`
             */
            PromotionName: string;
            /**
             * 计价单位。
             * @example `CNY或USD`
             */
            PriceUnit: string;
            /**
             * 子询价列表
             */
            PriceList: {
                /**
                 * 资源类型
                 * @example `eip`
                 */
                NodeType: string;
                /**
                 * 资源topo Id
                 * @example `1687225092`
                 */
                ResourceId: string;
                /**
                 * 错误信息
                 * @example `ServiceUnavailable : The request has failed due to a temporary failure of the server.\r\nRequestId : 4AA302DB-3286-5589-8637-FF6D8507B7A9.`
                 */
                Error: string;
                /**
                 * 交易价格
                 * @example `0.01`
                 */
                TradePrice: number;
                /**
                 * 订单优惠金额
                 * @example `82.99`
                 */
                DiscountAmount: number;
                /**
                 * 原价
                 * @example `83.0`
                 */
                OriginalPrice: number;
                /**
                 * 优惠信息
                 * @example `优惠信息`
                 */
                PromotionName: string;
                /**
                 * 计价单位
                 * @example `CNY或USD
                `
                 */
                PriceUnit: string;
                /**
                 * 是否新购：</br>1.新建</br>2已保有</br>0不计入价格
                 * @example `"1"`
                 */
                Type: string;
            }[];
        }[];
    };
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
}
