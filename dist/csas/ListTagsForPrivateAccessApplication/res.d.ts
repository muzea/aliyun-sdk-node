export interface ListTagsForPrivateAccessApplicationResponse {
    /**
     * 本次请求的ID。
     * @example `7241F45B-E8D3-5BA3-8172-8A58AC2AB0FC`
     */
    RequestId: string;
    /**
     * 内网访问应用列表。
     */
    Applications: {
        /**
         * 内网访问应用ID。
         * @example `pa-application-7a4445897856****`
         */
        ApplicationId: string;
        /**
         * 内网访问标签集合。
         */
        Tags: {
            /**
             * 内网访问标签ID。
             * @example `tag-c0cb77857a99****`
             */
            TagId: string;
            /**
             * 内网访问标签名称。
             * @example `tag_name`
             */
            Name: string;
            /**
             * 内网访问标签描述。
             * @example `这是一条内网访问标签`
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
             * @example `2022-07-01 16:05:26`
             */
            CreateTime: string;
        }[];
    }[];
}
