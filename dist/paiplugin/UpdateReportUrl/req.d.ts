export interface UpdateReportUrlRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 可公开访问的地址。
         * @example `http://example.com`
         */
        Url: string;
    };
}
