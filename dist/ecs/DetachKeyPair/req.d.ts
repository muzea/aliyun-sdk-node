export interface DetachKeyPairRequest {
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
     * 解绑SSH密钥对的实例ID。取值可以是由多台实例ID组成的一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp1d6tsvznfghy7y****", "i-bp1ippxbaql9zet7****", … "i-bp1ib7bcz07l****"]`
     */
    "InstanceIds": string;
}
