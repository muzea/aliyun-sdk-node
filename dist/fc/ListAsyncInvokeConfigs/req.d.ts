export interface ListAsyncInvokeConfigsRequest {
    /**
     * 函数名称，若不指定则列出所有函数的异步调用配置
     * @example `my-func`
     */
    "functionName"?: string;
    /**
     * 分页起始标记
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回的数量限制
     * @example `10`
     */
    "limit"?: number;
}
