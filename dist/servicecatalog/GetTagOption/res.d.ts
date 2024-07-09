export interface GetTagOptionResponse {
    /**
     * 标签选项详情。
     */
    TagOptionDetail: {
        /**
         * 是否启用。取值：
         * - true：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 标签选项ID。
         * @example `tag-bp15qmwz3r****`
         */
        TagOptionId: string;
        /**
         * 标签选项键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签选项值。
         * @example `v1`
         */
        Value: string;
        /**
         * 标签选项归属人云账号ID。
         * @example `133413081827****`
         */
        Owner: string;
    };
    /**
     * 请求ID。
     * @example `C1509725-055D-5C7B-9420-8B737DBD****`
     */
    RequestId: string;
}
