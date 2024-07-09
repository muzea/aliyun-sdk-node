export interface ListPrivateAccessTagsResponse {
    /**
     * 本次请求的ID。
     * @example `54C1D236-CDB9-586C-B44D-AFDCEA195545`
     */
    RequestId: string;
    /**
     * 内网访问标签总数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 内网访问标签列表。
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
         * @example `2022-10-10 11:39:34`
         */
        CreateTime: string;
        /**
         * 内网访问应用ID集合。
         */
        ApplicationIds: string[];
        /**
         * 内网访问策略ID集合。
         */
        PolicyIds: string[];
    }[];
}
