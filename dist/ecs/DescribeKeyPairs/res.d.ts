export interface DescribeKeyPairsResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 密钥对的总数。
     * @example `1`
     */
    TotalCount: number;
    KeyPairs: {
        /**
         * 密钥对信息集合。
         */
        KeyPair: {
            /**
             * 密钥对的创建时间。
             * @example `2023-09-04T08:33Z`
             */
            CreationTime: string;
            /**
             * 密钥对的名称。
             * @example `testKeyPairName`
             */
            KeyPairName: string;
            /**
             * 密钥对的指纹。
             * @example `ABC1234567`
             */
            KeyPairFingerPrint: string;
            /**
             * 资源组ID。
             * @example `rg-amnhr7u7c7hj****`
             */
            ResourceGroupId: string;
            /**
             * 公钥内容。
             * @example `ssh-rsa****`
             */
            PublicKey: string;
            Tags: {
                /**
                 * 密钥对的标签。
                 */
                Tag: {
                    /**
                     * 密钥对的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 密钥对的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
