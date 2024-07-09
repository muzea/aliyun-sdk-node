export interface CreateAntChainConsortiumResponse {
    /**
     * 请求ID
     * @example `87FAFC6B-E7AE-4626-B7F7-AE0B88E612D5`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 联盟ID
         * @example `A28nO1ow`
         */
        ConsortiumId: string;
    };
}
