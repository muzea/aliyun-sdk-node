export interface TagResourcesRequest {
    /**
     * 所需绑定标签的资源所在的实例的ID。
     * > 如需为Topic或Group ID绑定标签，则必须填写该参数。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId"?: string;
    /**
     * 资源类型。枚举类型。取值：
     * - **INSTANCE**
     * - **TOPIC**
     * - **GROUP**
     * @example `TOPIC`
     */
    "ResourceType": string;
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。**Key**和**Value**值必须同时输入。
         * - 该值不允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。**Key**和**Value**值必须同时输入。
         * - 该值可以为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 资源ID列表
     * @example `TopicA`
     */
    "ResourceId": string[];
}
