export interface ListSpanNamesResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
    SpanNames: {
        /**
         * Span名称列表。
         */
        SpanName: string[];
    };
}
