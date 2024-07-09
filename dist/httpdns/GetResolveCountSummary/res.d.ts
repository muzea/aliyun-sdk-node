export interface GetResolveCountSummaryResponse {
    /**
     * 请求ID。
     * @example `3106FFF3-3612-542A-B2CD-3CF4CD48****`
     */
    RequestId: string;
    /**
     * 统计结果。
     */
    ResolveSummary: {
        /**
         * ipv6 https解析次数。
         * @example `123`
         */
        Https6: number;
        /**
         * ipv6 http解析次数。
         * @example `123`
         */
        Http6: number;
        /**
         * ipv4 http解析次数。
         * @example `123`
         */
        Http: number;
        /**
         * ipv4 https解析次数。
         * @example `123`
         */
        Https: number;
    };
}
