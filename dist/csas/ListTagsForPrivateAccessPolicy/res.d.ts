export interface ListTagsForPrivateAccessPolicyResponse {
    /**
     * 本次请求的ID。
     * @example `9EE61139-A6A8-5E13-80AF-83435C21B26B`
     */
    RequestId: string;
    /**
     * 内网访问策略列表。
     */
    Polices: {
        /**
         * 内网访问策略ID。
         * @example `pa-policy-1b0d0e8b4bcf****`
         */
        PolicyId: string;
        /**
         * 内网访问标签集合。
         */
        Tags: {
            /**
             * 内网访问标签ID。
             * @example `tag-d3f64e8bdd4a****`
             */
            TagId: string;
            /**
             * 内网访问标签名称。
             * @example `tag_name`
             */
            Name: string;
            /**
             * 内网访问标签描述。
             * @example `这是一条被内网访问策略引用的标签`
             */
            Description: string;
            /**
             * 内网访问标签类型。取值：
             * - **Default**：默认。
             * - **Custom**：自定义。
             * @example `Default`
             */
            TagType: string;
            /**
             * 内网访问标签创建时间。
             * @example `2023-02-21 14:10:16`
             */
            CreateTime: string;
        }[];
    }[];
}
