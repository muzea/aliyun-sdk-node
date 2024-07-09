export interface DescribeElasticBandwidthSpecResponse {
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * 可选的弹性防护带宽规格列表。单位：Gbps。
     */
    ElasticBandwidthSpec: string[];
}
