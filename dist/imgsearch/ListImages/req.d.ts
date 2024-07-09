export interface ListImagesRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * Offset和Limit组合的分页方式只支持前2000条记录。当超过2000条时，需要使用上一次请求返回的Token作为请求下一页的参数。
     * @example `2`
     */
    "Token"?: string;
    /**
     * 起始记录。
     * @example `1`
     */
    "Offset"?: number;
    /**
     * 每页最多显示的条数。
     * @example `50`
     */
    "Limit"?: number;
    /**
     * 排列方式。包括升序（asc）和降序（desc）。
     * @example `asc`
     */
    "Order"?: string;
    /**
     * 样本ID前缀。
     * @example `U1`
     */
    "EntityIdPrefix"?: string;
}
