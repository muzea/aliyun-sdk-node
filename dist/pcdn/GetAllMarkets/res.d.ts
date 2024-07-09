export interface GetAllMarketsResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `BFCDB187-ED92-430A-8C8A-A96B63AD89F0`
     */
    RequestId: string;
    DataList: {
        /**
         * 返回的数据。
         */
        UsageData: {
            /**
             * 平台类型码。
             * @example `2`
             */
            Code: number;
            /**
             * 市场类型码。
             * @example `b1f2523b184b66ab`
             */
            MarketCode: string;
            /**
             * 市场名称。
             * @example `Player SDK for 阿里少儿`
             */
            MarketName: string;
        }[];
    };
}
