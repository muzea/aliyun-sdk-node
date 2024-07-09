export interface UntagResourcesRequest {
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
     * 待删除标签的全球加速资源类型。取值：
     * - **accelerator**：标准型全球加速实例。
     * - **basicaccelerator**：基础型全球加速实例。
     * - **bandwidthpackage**：带宽包。
     * - **acl**：访问控制策略组。
     * - **endpointgroup**：终端节点组。
     * @example `accelerator`
     */
    "ResourceType": string;
    /**
     * 是否将指定全球加速资源下所有标签全部删除。 取值：
     * - **true**：是。
     *
     * - **false**（默认值）：否。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 待删除标签的全球加速资源ID。
     * - 当**ResourceType**取值为**accelerator**时，取值为标准型全球加速实例ID。
     * - 当**ResourceType**取值为**basicaccelerator**时，取值为基础型全球加速实例ID。
     * - 当**ResourceType**取值为**bandwidthpackage**时，取值为带宽包ID。
     * - 当**ResourceType**取值为**acl**时，取值为访问控制策略组ID。
     * - 当**ResourceType**取值为**endpointgroup**时，取值为终端节点组ID。
     * 最多支持输入50个全球加速资源ID。
     */
    "ResourceId": string[];
    /**
     * 指定待删除标签的标签键。
     * 系统会删除全球加速资源上所有该标签键的标签。
     * 最多支持输入20个标签键。
     * > **All**取值为**true**时，本参数不生效。
     */
    "TagKey"?: string[];
}
