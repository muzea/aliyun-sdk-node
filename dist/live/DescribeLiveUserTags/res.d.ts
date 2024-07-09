export interface DescribeLiveUserTagsResponse {
    /**
     * 请求ID。
     * @example `6B0256B6-2442-5BEF-B8D6-A0C28A801DFC`
     */
    RequestId: string;
    /**
     * 标签。
     */
    Tags: {
        /**
         * 标签key。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签Value。
         */
        Value: string[];
    }[];
}
