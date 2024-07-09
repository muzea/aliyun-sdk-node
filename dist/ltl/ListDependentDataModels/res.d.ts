export interface ListDependentDataModelsResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 响应状态描述。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `RequestID-1638239980855`
     */
    RequestId: string;
    /**
     * 是否成功。-**true**：表示是。-**false**：表示否。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 响应内容。
         * @example `{}`
         */
        DataModelInfo: {
            /**
             * 数据模型名称
             * @example `测算模型`
             */
            DataModelName: string;
            /**
             * 数据模型编码
             * @example `KI8D`
             */
            DataModelCode: string;
        }[];
    };
}
