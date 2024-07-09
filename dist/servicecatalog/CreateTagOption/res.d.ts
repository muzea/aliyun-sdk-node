export interface CreateTagOptionResponse {
    /**
     * 标签选项详情。
     */
    TagOptionDetail: {
        /**
         * 是否启用。取值：
         * - true（默认值）：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 标签选项ID。
         * @example `tag-bp1r3mxq3t****`
         */
        TagOptionId: string;
        /**
         * 用户输入的标签选项键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `k1`
         */
        Key: string;
        /**
         * 用户输入的标签选项值。
         * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `v1`
         */
        Value: string;
        /**
         * 标签选项归属人云账号ID。
         * @example `133413081827****
        `
         */
        Owner: string;
    };
    /**
     * 请求ID。
     * @example `A48A5F12-6098-54A1-A389-6834AF27****`
     */
    RequestId: string;
}
