export interface ListFunctionsRequest {
    /**
     * 函数名称前缀。
     * @example `my-func`
     */
    "prefix"?: string;
    /**
     * 分页起始标记。
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回函数的数量，最小值为1，最大值为100。
     * @example `10`
     */
    "limit"?: number;
}
