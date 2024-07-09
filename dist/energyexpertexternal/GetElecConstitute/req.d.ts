export interface GetElecConstituteRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 企业编码
         * @example `C-20240202-01`
         */
        code: string;
        /**
         * 年份
         * @example `2024`
         */
        year: number;
    };
}
