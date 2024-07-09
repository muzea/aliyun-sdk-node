export interface DescribeKeyPairsResponse {
    KeyPairs: {
        /**
         * 密钥对信息。
         */
        KeyPair: {
            /**
             * 密钥对的创建时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-04-26T15:38:27Z`
             */
            CreationTime: string;
            /**
             * 密钥对的指纹。
             * @example `fdaf8ff7a756ef843814fc****`
             */
            KeyPairFingerPrint: string;
            /**
             * 密钥对的名称。
             * @example `TestKeyPairName`
             */
            KeyPairName: string;
            /**
             * 密钥对的ID
             * @example `ssh-50cynkq42sgj4ej1tn78t4***`
             */
            KeyPairId: string;
        }[];
    };
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `37B52F33-6879-49D0-A39B-22966B01449E`
     */
    RequestId: string;
    /**
     * 密钥对的总数。
     * @example `7`
     */
    TotalCount: number;
}
