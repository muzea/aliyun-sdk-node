export interface ModifyElasticBandWidthRequest {
    /**
     * 要设置的弹性防护带宽，单位：Gbps。
     * > 您可以调用[DescribeElasticBandwidthSpec](~~91502~~)查询可选的弹性防护带宽规格。
     * @example `50`
     */
    "ElasticBandwidth": number;
    /**
     * DDoS高防实例的ID。
     * > 实例必须处于正常状态。您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
}
