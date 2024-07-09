export interface DescribeMeterImsMpsAiUsageResponse {
    /**
     * 请求ID。
     * @example `0622C702-41BE-467E-AF2E-883D4517962E`
     */
    RequestId: string;
    /**
     * IMS的MPS-AI计量数据。
     */
    Data: {
        /**
         * 时间段开始时间戳，10位。
         * @example `1656950400`
         */
        Time: number;
        /**
         * AI类型。
         * @example `Censor：审核类型
        Product：生产类型`
         */
        Type: string;
        /**
         * 时长，单位min。
         * @example `644`
         */
        Duration: number;
    }[];
}
