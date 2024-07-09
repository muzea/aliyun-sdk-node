export interface DescribePriceResponse {
    /**
     * 总价格。
     * <props="china">单位：元</props>
     * <props="intl">单位：美元</props>
     * @example `1258`
     */
    TotalTradePrice: number;
    /**
     * 请求ID。
     * @example `54FF9025-2C2F-42EB-870D-0DF5B0ACF24E`
     */
    RequestId: string;
    Prices: {
        /**
         * 集群价格列表。当请求参数查询集群的多个节点配置价格时，返回值PriceInfo内多个元素的顺序与请求参数设置的多个节点信息的顺序依次对应。例如，请求参数中N=1的节点信息，对应的返回值为PriceInfo内的第一个元素。
         */
        PriceInfo: {
            /**
             * 原价。
             * <props="china">单位：元</props>
             * <props="intl">单位：美元</props>
             * @example `1258`
             */
            OriginalPrice: number;
            /**
             * 节点类型。可能值：
             * - Manager：管控节点
             * - Login：登录节点
             * - Compute：计算节点
             * @example `Compute`
             */
            NodeType: string;
            /**
             * 货币单位。可能值：
             * <props="china">CNY：人民币</props>
             * <props="intl">USD：美元</props>
             * @example `<props="china">CNY</props>
            
            <props="intl">USD</props>`
             */
            Currency: string;
            /**
             * 成交价。
             * <props="china">单位：元</props>
             * <props="intl">单位：美元</props>
             * @example `1258`
             */
            TradePrice: number;
        }[];
    };
}
