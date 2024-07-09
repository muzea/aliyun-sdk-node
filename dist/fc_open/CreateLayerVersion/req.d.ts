export interface CreateLayerVersionRequest {
    /**
     * 层的名称。最大长度为128个字符。
     * @example `MyLayer`
     */
    "layerName": string;
    /**
     * 层的信息。
     */
    "body"?: {
        /**
         * 层的描述信息。最大长度为256个字符。
         * @example `test`
         */
        description: string;
        /**
         * 层支持的运行时环境列表。
         */
        compatibleRuntime: string[];
        /**
         * 层的代码。
         */
        Code: any;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `r4isu4sls****`
     */
    "X-Fc-Trace-Id"?: string;
}
