export interface ListTagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资源类型，仅支持`application`。
     * @example `application`
     */
    "ResourceType": string;
    /**
     * 一次查询最多返回50条结果，当结果超过50条时，会同时返回一个NextToken，下一次查询使用该NextToken即可查询前50条结果之外的结果。
     * @example `A2RN`
     */
    "NextToken"?: string;
    /**
     * 资源ID。可填写多个资源ID，用英文逗号（,）分隔。当您未输入**Tags**参数时必填。
     * @example `["d42921c4-5433-4abd-8075-0e536f8b****"]`
     */
    "ResourceIds"?: string;
    /**
     * 标签键值对，当您未输入**ResourceIds**参数时必填。取值说明如下：
     * - **key**：标签键，字符长度范围\[1,128]。
     * - **value**：标签值，字符长度范围\[1,128]。
     * 区分大小写。如果指定多个标签，则会为指定资源同时创建并绑定多个标签。同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
     * 不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     * @example `[{"key":"k1","value":"v1"}]`
     */
    "Tags"?: string;
}
