export interface ListQueueUpStreamBindingsResponse {
    /**
     * 请求ID。
     * @example `8BFB1C9D-08A2-4859-A47C-403C9EFA2***`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 最大结果集。
         * @example `1`
         */
        MaxResults: string;
        /**
         * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
         * @example `caebacccb2be03f84eb48b699f0a****`
         */
        NextToken: string;
        /**
         * 绑定。
         */
        Bindings: {
            /**
             * 源Exchange名称。
             * @example `test`
             */
            SourceExchange: string;
            /**
             * x-match属性。取值：
             * - **all**：默认值，所有消息头的键值对必须匹配。
             * - **any**：至少一对消息头的键值对必须匹配。
             * 该参数仅适用于Headers类型的Exchange，对其它类型的Exchange无效。
             * @example `all`
             */
            Argument: string;
            /**
             * 绑定键。
             * - 绑定源Exchange为非Topic类型：
             *     - 只能包含字母、数字、短划线（-）、下划线（_）、半角句号（.）、正斜线（/）、at符号（@）。
             *     - 长度限制1~255字符。
             * - 绑定源Exchange为Topic类型：
             *     - 可以包含字母、数字、短划线（-）、下划线（_）、半角句号（.）、井号（#）、正斜线（/）、at符号（@）。
             *     - 不能以半角句号（.）开头或结尾。对于井号（#）或星号（*），如果以其开头，则其后需有半角句号（.），如果以其结尾，则其前需有半角句号（.），如果既不是开头也不是结尾，则其前后均需有半角句号（.）。
             *     - 长度限制1~255字符。
             * @example `amq.test`
             */
            BindingKey: string;
            /**
             * 绑定目标对象的类型。取值：
             * - **QUEUE**
             * - **EXCHANGE**
             * @example `QUEUE`
             */
            BindingType: string;
            /**
             * 绑定名称。
             * @example `QueueTest`
             */
            DestinationName: string;
        }[];
    };
}
