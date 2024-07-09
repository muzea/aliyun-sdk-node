export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * > 如果一次查询没有返回全部结果，则会返回本参数，您可以后续查询中传入本参数返回的值以继续查询。
     * @example `212db86****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `96017AF2-9AB1-4BC9-88D2-7966B3CD****`
     */
    RequestId: string;
    TagResources: {
        /**
         * 实例和标签信息。
         */
        TagResource: {
            /**
             * 资源类型。返回值固定为**ALIYUN::KVSTORE::INSTANCE**，即MongoDB实例。
             * @example `ALIYUN::DDS::INSTANCE`
             */
            ResourceType: string;
            /**
             * 标签的值。
             * @example `4.0环境`
             */
            TagValue: string;
            /**
             * 资源ID，此处为MongoDB实例ID。
             * @example `dds-bp17e7a04960****`
             */
            ResourceId: string;
            /**
             * 标签的键。
             * @example `开发组`
             */
            TagKey: string;
        }[];
    };
}
