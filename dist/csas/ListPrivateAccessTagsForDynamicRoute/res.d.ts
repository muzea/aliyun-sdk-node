export interface ListPrivateAccessTagsForDynamicRouteResponse {
    /**
     * 本次请求的ID。
     * @example `B608C6AE-623D-55C4-9454-601B88AE937E`
     */
    RequestId: string;
    /**
     * 动态路由列表。
     */
    DynamicRoutes: {
        /**
         * 动态路由ID。
         * @example `dr-ca9fddfac7c6****`
         */
        DynamicRouteId: string;
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
             * @example `这是一条被动态路由引用的内网访问标签`
             */
            Description: string;
            /**
             * 内网访问标签类型。取值：
             * - **Default**：默认。
             * - **Custom**：自定义。
             * @example `Custom`
             */
            TagType: string;
            /**
             * 内网访问标签创建时间。
             * @example `2022-10-23 14:02:56`
             */
            CreateTime: string;
        }[];
    }[];
}
