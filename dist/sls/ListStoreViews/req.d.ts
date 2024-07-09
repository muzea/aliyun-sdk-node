export interface ListStoreViewsRequest {
    /**
     * 日志项目名称。
     * @example `example-project`
     */
    "project": string;
    /**
     * 期望返回的数据集个数， 默认值为 100。
     * @example `100`
     */
    "size"?: number;
    /**
     * 返回结果在全部数据集中的偏移位置， 默认为 0 。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 用于模糊搜索的数据集名称。
     * @example `my_storeview`
     */
    "name"?: string;
    /**
     * 数据集类型，默认不根据类型过滤。
     * @example `logstore`
     */
    "storeType"?: string;
}
