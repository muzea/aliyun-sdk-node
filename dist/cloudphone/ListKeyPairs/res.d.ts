export interface ListKeyPairsResponse {
    /**
     * 返回下一页的查询凭证。
     * @example `ADBAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * keypair总数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 返回的最大数。取值范围：1~100。
     * @example `100`
     */
    MaxResults: number;
    KeyPairs: {
        /**
         * 返回的keypair列表。
         */
        KeyPair: {
            /**
             * 密钥对的创建时间。
             * @example `2021-03-04T13:35Z`
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
        }[];
    };
}
