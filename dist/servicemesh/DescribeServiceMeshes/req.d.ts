export interface DescribeServiceMeshesRequest {
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签Key。
         * @example `test`
         */
        Key: string;
        /**
         * 标签值。
         * @example `yahaha`
         */
        Value: string;
    }[];
}
