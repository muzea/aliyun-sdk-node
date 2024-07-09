export interface RecalculateCarbonEmissionRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 企业编码
         * @example `C-20240202-01`
         */
        code: string;
        /**
         * 盘查年份
         * @example `2024`
         */
        year: string;
    };
}
