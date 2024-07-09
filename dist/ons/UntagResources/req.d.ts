export interface UntagResourcesRequest {
    /**
     * 如需解除Topic和Group ID与标签的绑定关系，该参数为必填。
     * @example `MQ_INST_188077086902****_BX4jvZZG`
     */
    "InstanceId"?: string;
    /**
     * 资源类型。枚举类型，目前支持的资源类型：
     * - **INSTANCE**
     * - **TOPIC**
     * - **GROUP**
     * @example `TOPIC`
     */
    "ResourceType": string;
    /**
     * 是否删除资源绑定的全部标签。当请求中未设置**TagKey**时该参数有效。默认值**false**。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表。
     * @example `TopicA`
     */
    "ResourceId": string[];
    /**
     * 资源的标签键列表。
     * @example `CartService`
     */
    "TagKey"?: string[];
}
