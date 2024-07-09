export interface ListFaceEntitiesRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * 起始记录，取值范围0~2000。
     * @example `1`
     */
    "Offset"?: number;
    /**
     * 每页最多显示的样本数目，取值范围1~200。
     * @example `50`
     */
    "Limit"?: number;
    /**
     * 当查询结果超过2000条时，需要使用上一次请求返回的Token作为请求下一页的参数。
     * @example `2`
     */
    "Token"?: string;
    /**
     * 标签，最多支持10个标签，多个标签以英文逗号（,）分割。
     * @example `鹿班`
     */
    "Labels"?: string;
    /**
     * 样本ID前缀，包含数字、字母和下划线。
     * @example `U1`
     */
    "EntityIdPrefix"?: string;
    /**
     * 排列方式。包括asc（升序）和desc（降序）。
     * @example `asc`
     */
    "Order"?: string;
}
