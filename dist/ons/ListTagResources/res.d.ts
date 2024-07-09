export interface ListTagResourcesResponse {
    /**
     * 下一页查询开始的Token。
     * @example `caeba0****be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `301D2CBE-66F8-403D-AEC0-82582478****`
     */
    RequestId: string;
    /**
     * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
     */
    TagResources: {
        /**
         * 资源类型。
         * - ALIYUN::MQ::INSTANCE：表示资源类型为实例。
         * - ALIYUN::MQ::TOPIC：表示资源类型为Topic。
         * - ALIYUN::MQ::GROUP：表示资源类型为Group。
         * @example `ALIYUN::MQ::TOPIC`
         */
        ResourceType: string;
        /**
         * 实例ID。
         * @example `MQ_INST_188077086902****_BXSuW61e`
         */
        InstanceId: string;
        /**
         * 标签值。
         * @example `ServiceA`
         */
        TagValue: string;
        /**
         * 资源ID。
         * @example `TopicA`
         */
        ResourceId: string;
        /**
         * 标签键。
         * @example `CartService`
         */
        TagKey: string;
    }[];
}
