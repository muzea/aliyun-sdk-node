export interface ListCustomGroupsRequest {
    /**
     * 自定义类型，取值：
     * - landmark：自定义地标。
     * - object：自定义物体。
     * @example `landmark`
     */
    "Algorithm": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页数量。单页数量最大不超过50。
     * @example `10`
     */
    "PageSize": number;
}
