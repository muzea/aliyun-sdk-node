export interface AttachKeyPairRequest {
    /**
     * SSH密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SSH密钥对名称。
     * @example `testKeyPairName`
     */
    "KeyPairName": string;
    /**
     * 绑定SSH密钥对的实例ID。取值可以由多台实例ID组成一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp1gtjxuuvwj17zr****", "i-bp17b7zrsbjwvmfy****", … "i-bp1h6jmbefj1ytos****"]`
     */
    "InstanceIds": string;
}
