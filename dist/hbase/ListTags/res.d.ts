export interface ListTagsResponse {
    /**
     * 请求ID
     * @example `36D1BE9B-3C4A-425B-947A-69E3D77999C4`
     */
    RequestId: string;
    Tags: {
        /**
         * Tag列表
         */
        Tag: {
            /**
             * tag值
             * @example `v2`
             */
            TagValue: string;
            /**
             * tag键
             * @example `k1`
             */
            TagKey: string;
        }[];
    };
}
