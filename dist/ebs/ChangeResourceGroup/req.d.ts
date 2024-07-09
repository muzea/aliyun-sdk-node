export interface ChangeResourceGroupRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。取值范围：
     * - dedicatedblockstoragecluster：专属块存储集群。
     * - diskreplicapair：异步复制关系。
     * - diskreplicagroup：一致性复制组。
     * @example `diskreplicapair`
     */
    "ResourceType": string;
    /**
     * 资源ID。例如，当ResourceType=diskreplicapair时，则ResourceId可以理解为异步复制对ID。
     * @example `pair-123`
     */
    "ResourceId": string;
    /**
     * 新的企业资源组ID，可在资源组控制台查看可用企业资源组。企业资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-123`
     */
    "NewResourceGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
