export interface ListTagsResponse {
    /**
     * 请求id。
     * @example `36D1BE9B-3C4A-425B-947A-69E3D77999C4`
     */
    RequestId: string;
    Tags: {
        /**
         * 标签列表。
         */
        Tag: {
            /**
             * 标签值。
             * @example `v2`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `k1`
             */
            TagKey: string;
        }[];
    };
}
