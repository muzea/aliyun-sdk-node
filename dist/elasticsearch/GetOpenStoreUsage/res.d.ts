export interface GetOpenStoreUsageResponse {
    /**
     * 请求ID。
     * @example `E1DE2491-804F-4C86-BAB4-548DD70B****`
     */
    RequestId: string;
    /**
     * 当前请求结果。
     */
    Result: {
        /**
         * 昨日OpenStore存储使用容量，单位：Byte。
         * @example `184320`
         */
        lastDayUsage: number;
        /**
         * 当前OpenStore存储使用容量（根据实际索引得到的预估值），单位：Byte。
         * @example `204800`
         */
        currentUsage: number;
    };
}
