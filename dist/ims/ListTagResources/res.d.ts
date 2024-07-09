export interface ListTagResourcesResponse {
    /**
     * 当IsTruncated为true时才有此参数，当返回true时，需要继续调用此接口，使用NextToken获取截断后的内容。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `4BE83135-0B08-467C-B3A2-27B312FD0F57`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源绑定的标签列表。
         */
        TagResource: {
            /**
             * 资源类型。取值：
             * - user：RAM用户。
             * @example `user`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `alice`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `20732900249392****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `operator`
             */
            TagKey: string;
        }[];
    };
    /**
     * 请求返回结果是否被截断。取值：
     * - true
     * - false
     * @example `true`
     */
    IsTruncated: boolean;
}
