export interface ListInstanceServiceConfigHistoriesRequest {
    /**
     * 集群Id。
     * @example `hb-t4naqsay5gn******`
     */
    "ClusterId": string;
    /**
     * 页码，不填时默认1。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 页面大小，不填时默认10。
     * @example `10`
     */
    "PageNumber"?: number;
}
