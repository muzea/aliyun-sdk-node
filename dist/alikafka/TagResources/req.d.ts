export interface TagResourcesRequest {
    /**
     * 资源的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。枚举类型。取值：
     * - **INSTANCE**
     * - **TOPIC**
     * - **CONSUMERGROUP**
     * >不区分大小写。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。
         * - 不允许为空。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。
         * - 可以为空。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 所需绑定标签的资源所在的实例的ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId"?: string;
}
