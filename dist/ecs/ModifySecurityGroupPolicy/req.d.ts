export interface ModifySecurityGroupPolicyRequest {
    /**
     * 安全组的ID。
     * @example `sg-bp67acfmxazb4ph****`
     */
    "SecurityGroupId": string;
    /**
     * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 安全组内的ECS实例之间的内网连通策略。取值范围：
     * - Accept：互通
     * - Drop：隔离
     * 取值不区分大小写。
     * @example `Drop`
     */
    "InnerAccessPolicy": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
