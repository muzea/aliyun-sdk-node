export interface ListInstancesRequest {
    /**
     * 实例ID模糊匹配过滤。
     * @example `pairec-test1`
     */
    "InstanceId"?: string;
    /**
     * 排序依据。
     * @example `Type`
     */
    "SortBy"?: string;
    /**
     * 排序方式。
     * @example `Desc`
     */
    "Order"?: string;
    /**
     * 页大小。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页码。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 实例类型。
     * - basic-基础版
     * - highleve-升级版
     * - advance-进阶版
     * - standard-标准版
     * @example `basic`
     */
    "Type"?: string;
}
