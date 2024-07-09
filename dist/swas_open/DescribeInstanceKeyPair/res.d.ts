export interface DescribeInstanceKeyPairResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
    /**
     * 密钥对名称。
     * @example `KeyPairName`
     */
    KeyPairName: string;
    /**
     * 密钥对指纹。
     * @example `4f:70:62:e9:0c:72:f7:ee:74:ce:e3:bf:e0:82:**:**`
     */
    Fingerprint: string;
}
