export interface GetElecTrendRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 企业code。
         * @example `C-20240115-3`
         */
        code: string;
        /**
         * 年份列表。
         */
        yearList: number[];
    };
}
