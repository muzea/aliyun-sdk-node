export interface ChangeResourceGroupRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 待修改资源组的全球加速资源ID。
     * - 当**ResourceType**取值为**accelerator**时，取值为标准型全球加速实例ID。
     * - 当**ResourceType**取值为**basicaccelerator**时，取值为基础型全球加速实例ID。
     * -  当**ResourceType**取值为**bandwidthpackage**时，取值为带宽包ID。
     * - 当**ResourceType**取值为**acl**时，取值为访问控制策略组ID。
     * @example `ga-bp149u6o36qt1as9b****`
     */
    "ResourceId": string;
    /**
     * 要替换的新的资源组ID。
     * @example `rg-aekzrnd67gq****`
     */
    "NewResourceGroupId": string;
    /**
     * 待修改资源组的全球加速资源类型。取值：
     * - **accelerator**：标准型全球加速实例。
     * -  **basicaccelerator**：基础型全球加速实例。
     * - **bandwidthpackage**：带宽包。
     * - **acl**：访问控制策略组。
     * @example `accelerator`
     */
    "ResourceType": string;
}
