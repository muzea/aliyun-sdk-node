export interface DescribeHighlightInfoResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 高亮数据的数据模型。
     */
    DataModule: {
        /**
         * 高亮内容类型。
         * @example `URL`
         */
        Key: string;
        /**
         * 高亮数据。
         * @example `["data:image/php;base64"]`
         */
        Hit: string;
        /**
         * 完整数据。
         * @example `data:image/php;base64,PD9waHAXXXXXXanVzdHR0dHXXXXXB0ZXN0Ijs/Pg==`
         */
        Raw: string;
    }[];
}
