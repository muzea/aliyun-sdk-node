export interface ListFunctionVersionsRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 分页起始标记
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 版本排序方式。BACKWARD或者FORWARD。
     * @example `BACKWARD`
     */
    "direction"?: string;
    /**
     * 返回的版本数量
     * @example `10`
     */
    "limit"?: number;
}
