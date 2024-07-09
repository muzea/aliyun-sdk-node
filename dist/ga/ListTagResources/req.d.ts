export interface ListTagResourcesRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 待查询标签信息的全球加速资源类型。取值：
     * - **accelerator**：标准型全球加速实例。
     * - **basicaccelerator**：基础型全球加速实例。
     * - **bandwidthpackage**：带宽包。
     * - **acl**：访问控制策略组。
     * - **endpointgroup**：终端节点组。
     * @example `accelerator`
     */
    "ResourceType": string;
    /**
     * 待查询标签信息的全球加速资源ID。
     * - 当**ResourceType**取值为**accelerator**时，取值为标准型全球加速实例ID。
     * - 当**ResourceType**取值为**basicaccelerator**时，取值为基础型全球加速实例ID。
     * - 当**ResourceType**取值为**bandwidthpackage**时，取值为带宽包ID。
     * - 当**ResourceType**取值为**acl**时，取值为访问控制策略组ID。
     * - 当**ResourceType**取值为**endpointgroup**时，取值为终端节点组ID。
     * 最多支持输入50个全球加速资源ID。
     */
    "ResourceId"?: string[];
    /**
     * 全球加速资源的标签列表。
     * 最多输入20个标签。
     */
    "Tag"?: {
        /**
         * 全球加速资源的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * 全球加速资源的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `valueTest`
         */
        Value: string;
    }[];
}
