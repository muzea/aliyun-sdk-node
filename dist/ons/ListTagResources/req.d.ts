export interface ListTagResourcesRequest {
    /**
     * 需查询的标签所绑定资源所在的实例ID。
     * > 如果您需查询的是Topic、Group的标签，则必须填写该参数。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId"?: string;
    /**
     * 资源类型。枚举类型。取值如下：
     * - **INSTANCE**
     * - **TOPIC**
     * - **GROUP**
     * @example `TOPIC`
     */
    "ResourceType": string;
    /**
     * 下一页查询开始的Token。
     * @example `caeba0****be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 标签列表。列表元素个数不得超过 20。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * - 若输入该参数，则参数取值不允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `CartService`
         */
        Key: string;
        /**
         * 资源的标签值。
         * - 若输入该参数，参数取值允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ServiceA`
         */
        Value: string;
    }[];
    /**
     * 资源ID列表。
     * @example `TopicA`
     */
    "ResourceId"?: string[];
}
