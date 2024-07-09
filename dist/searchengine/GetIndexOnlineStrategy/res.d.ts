export interface GetIndexOnlineStrategyResponse {
    /**
     * id of request
     * @example `FE03180A-0E29-5474-8A86-33F0683294A4`
     */
    requestId: string;
    /**
     * Object
     */
    result: {
        /**
         * 索引变化率
         * @example `20`
         */
        changeRate: number;
    };
}
