export interface DescribeNamespacesRequest {
    /**
     * 地域。
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 订单实例ID。
     * @example `f-cn-wwo36qj4g06`
     */
    "InstanceId": string;
    /**
     * 项目空间名称。
     * @example `di-590843445844225`
     */
    "Namespace"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `Flink`
         */
        Key: string;
        /**
         * 标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 当前页数
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
    "Ha"?: boolean;
}
