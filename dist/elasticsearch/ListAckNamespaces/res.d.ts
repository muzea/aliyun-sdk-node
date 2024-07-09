export interface ListAckNamespacesResponse {
    /**
     * 请求id。
     * @example `95789100-A329-473B-9D14-9E0B7DB4BD5A`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 集群的命名空间。
         * @example `logging`
         */
        namespace: string;
        /**
         * 命名空间状态。
         * @example `Active`
         */
        status: string;
    }[];
}
