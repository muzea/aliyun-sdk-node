export interface AllocatePublicContactPointsRequest {
    /**
     * 集群ID。
     * @example `cds-bp1hy2i****2z46l`
     */
    "ClusterId": string;
    /**
     * 集群数据中心ID。
     * @example `cn-hangzhou-g`
     */
    "DataCenterId": string;
    "ClientToken"?: string;
}
