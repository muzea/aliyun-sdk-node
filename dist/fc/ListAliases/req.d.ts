export interface ListAliasesRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 别名名称前缀
     * @example `my-alias`
     */
    "prefix"?: string;
    /**
     * 分页起始标记
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回的别名数量
     * @example `10`
     */
    "limit"?: number;
}
