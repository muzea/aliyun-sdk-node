export interface ListTriggersRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 触发器名称前缀
     * @example `my-trigger`
     */
    "prefix"?: string;
    /**
     * 分页起始标记
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回的触发器数量
     * @example `10`
     */
    "limit"?: number;
}
