export interface ListQueuesRequest {
    /**
     * 指定集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 是否异步查询。
     * @example `false`
     */
    "Async"?: boolean;
}
