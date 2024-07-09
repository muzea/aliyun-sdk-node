export interface DeleteKeyPairsRequest {
    /**
     * SSH密钥对所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SSH密钥对名称。取值可以由多个SSH密钥对名称组成一个JSON数组，最多支持100对SSH密钥对，名称之间用半角逗号（,）隔开。
     * >在进行删除SSH密钥对前，您可以调用[DescribeKeyPairs](~~51773~~)查询已有密钥对。
     * @example `["TestKeyPairName-1", "TestKeyPairName-2", … "TestKeyPairName-100"]`
     */
    "KeyPairNames": string;
}
