export interface DescribeTenantReadableScnResponse {
    /**
     * 请求 ID。
     * @example `8442BB1E-3171-1192-B9DC-F6F4E53B2673`
     */
    RequestId: string;
    /**
     * 请求返回的相关信息。
     */
    Data: {
        /**
         * 最大可读位点。
         * @example `1715329164977`
         */
        ReadableScn: number;
    };
}
