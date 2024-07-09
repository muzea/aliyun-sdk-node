export interface DeleteServerlessClusterRequest {
    /**
     * 集群ID。
     * @example `sh-bp1pj13wh9****`
     */
    "ClusterId": string;
    /**
     * 地域单元。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 可用区。
     * @example `cn-shenzhen-e`
     */
    "ZoneId": string;
}
