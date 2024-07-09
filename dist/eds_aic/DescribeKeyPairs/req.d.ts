export interface DescribeKeyPairsRequest {
    /**
     * 密钥对ID列表。
     */
    "KeyPairIds"?: string[];
    /**
     * ADB密钥对名称。
     * @example `testKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAYRHtOLVQzCYj17y+OP7LZQBUVVbi0GTu8g5****`
     */
    "NextToken"?: string;
}
