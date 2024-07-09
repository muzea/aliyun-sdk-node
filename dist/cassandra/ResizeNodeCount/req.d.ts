export interface ResizeNodeCountRequest {
    /**
     * 集群ID。
     * @example `cds-bp1b136j****5d59`
     */
    "ClusterId": string;
    /**
     * 数据中心ID。
     * @example ` cn-hangzhou-g`
     */
    "DataCenterId": string;
    /**
     * 数据中心节点数。
     * @example `3`
     */
    "NodeCount": number;
}
