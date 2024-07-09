export interface GetTagKeyResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
    TagKeys: {
        /**
         * 标签键列表。
         */
        TagKey: string[];
    };
}
