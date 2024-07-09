export interface DescribeImageComponentsResponse {
    /**
     *
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的镜像组件数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页行数。
     * @example `50`
     */
    MaxResults: number;
    ImageComponent: {
        /**
         * 镜像组件的详细信息组成的列表。
         */
        ImageComponentSet: {
            /**
             * 组件创建时间。
             * @example `2020-11-24T06:00:00Z`
             */
            CreationTime: string;
            /**
             * 描述信息。
             * @example `This is description.`
             */
            Description: string;
            /**
             * 组件支持的操作系统。
             * @example `Linux`
             */
            SystemType: string;
            /**
             * 镜像组件ID。
             * @example `ic-bp67acfmxazb4p****`
             */
            ImageComponentId: string;
            /**
             * 组件类型。
             * @example `Build`
             */
            ComponentType: string;
            /**
             * 资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 组件名称。
             * @example `testComponent`
             */
            Name: string;
            /**
             * 组件内容。
             * @example `RESTART`
             */
            Content: string;
            /**
             * 镜像组件类型。可能值：
             * - SELF：您创建的自定义镜像组件。
             * - ALIYUN：阿里云提供的系统组件。
             * @example `SELF`
             */
            Owner: string;
            Tags: {
                /**
                 * 标签键值对列表。
                 */
                Tag: {
                    /**
                     * 标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
