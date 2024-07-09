export interface ListTagsRequest {
    /**
     * 返回结果的分页数。默认值：20，最小值：1，最大值：50。
     * @example `20`
     */
    "pageSize"?: number;
    /**
     * 资源类型，固定为INSTANCE。
     * @example `INSTANCE`
     */
    "resourceType"?: string;
}
