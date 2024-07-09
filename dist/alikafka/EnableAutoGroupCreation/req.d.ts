export interface EnableAutoGroupCreationRequest {
    /**
     * 地域 ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例 ID。
     * 可调用[GetInstanceList](~~437663~~)获取。
     * @example `alikafka_post-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * 启用或禁用自由使用 Group。取值范围如下：
     * - **true**：启用。
     * - **false**：禁用。
     * @example `true`
     */
    "Enable": boolean;
}
