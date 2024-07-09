export interface GetModifyBEClusterInquiryResponse {
    /**
     * 请求ID。
     * @example `06758CAB-1204-5852-A471-29C87D5C1D0F
    `
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 货币。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 金额。
         * @example `1.76`
         */
        TradeAmount: string;
    };
}
