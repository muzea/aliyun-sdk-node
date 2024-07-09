export interface ListVersionsRequest {
    /**
     * 需要查询的工作流ID
     * @example `lc-uf6axpwfcw4ubx`
     */
    "FlowId": string;
    /**
     * 当前页数。 取值为大于0的整数。 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小，最大 100，默认值为 10
     * @example `10`
     */
    "PageSize"?: number;
}
