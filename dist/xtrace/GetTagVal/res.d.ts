export interface GetTagValResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
    TagValues: {
        TagValue: string[];
    };
}
