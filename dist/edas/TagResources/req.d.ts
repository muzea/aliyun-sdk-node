export interface TagResourcesRequest {
    /**
     * 资源类型，取值：
     * - **application：EDAS**应用。
     * - **cluster**：EDAS集群。
     * @example `application`
     */
    "ResourceType": string;
    /**
     * 资源ID列表， 列表的长度范围为1~20，JSON数组格式。
     * @example `["000e5836-xxxx-xxxx-xxxx-0d6ab2ac4877"]`
     */
    "ResourceIds": string;
    /**
     * 标签键值对。设置时，请注意以下限制：
     * - 单个资源最多贴20个标签。
     * - key不能以**aliyun**和**acs:**开头，不能包含**http://**或者**https://**。
     * - key和value最大不超过128字符，仅支持英文字母、数字和短划线（-）、半角逗号（,）、星号（*）、正斜线（/）、半角问号（?）和半角冒号（:）的组合。
     * - JSON格式字符串。
     * @example `[{"key":"key1","value":"v1"},{"key":"key2","value":"v2"}]`
     */
    "Tags": string;
    /**
     * 资源所属地域。
     * @example `cn-hangzhou`
     */
    "ResourceRegionId": string;
}
