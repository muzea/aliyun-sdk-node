export interface DescribeTraceInfoNodeResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `F35F45B0-5D6B-4238-BE02-A62DXXXXXXXX`
     */
    RequestId: string;
    /**
     * 溯源节点详情信息。
     */
    Node: {
        /**
         * 溯源节点类型。
         * @example `Alert`
         */
        Type: string;
        /**
         * 溯源节点名称。
         * @example `login`
         */
        Name: string;
        /**
         * 溯源节点详细属性。
         */
        PropertyList: {
            /**
             * 属性名称。
             * @example `Incident`
             */
            Name: string;
            /**
             * 属性值。
             * @example `Alert`
             */
            Value: string;
        }[];
    };
}
