export interface ListCustomViewsRequest {
    /**
     * 自定义类型，取值：
     * - landmark：自定义地标。
     * - object：自定义物体。
     * @example `landmark`
     */
    "Algorithm": string;
    /**
     * 自定义库ID。
     * @example `1`
     */
    "CustomGroupId": string;
    /**
     * 自定义库实体entityID。
     * @example `1`
     */
    "CustomEntityId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页数量。单页最大数量不超过50。
     * @example `10`
     */
    "PageSize": number;
}
