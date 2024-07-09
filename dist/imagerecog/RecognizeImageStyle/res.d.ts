export interface RecognizeImageStyleResponse {
    /**
     * 请求ID。
     * @example `66FC3009-9A7A-4D29-8B70-D6EB256EF590`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        Styles: string[];
    };
}
