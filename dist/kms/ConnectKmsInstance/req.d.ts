export interface ConnectKmsInstanceRequest {
    /**
     * 要启用的KMS实例的ID。
     * @example `kst-phzz64f722a1buamw0****`
     */
    "KmsInstanceId": string;
    /**
     * 为KMS实例设置专有网络VPC ID。
     * @example `vpc-bp19z7cwmltad5dff****`
     */
    "VpcId": string;
    /**
     * 为KMS实例设置两个可用区。通过双可用区负载均衡，提高服务可用性与容灾能力。
     * @example `cn-hangzhou-k,cn-hangzhou-j`
     */
    "ZoneIds": string;
    /**
     * 设置双可用区下的一个交换机，并且该交换机至少有1个可用IP。
     * @example `vsw-bp1i512amda6d10a0****`
     */
    "VSwitchIds": string;
    /**
     * KMS实例提供商。目前取值仅支持Aliyun。
     * @example `Aliyun`
     */
    "KMProvider": string;
}
