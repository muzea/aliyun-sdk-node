export interface DeleteIPv6TranslatorAclListRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     *  IPv6转换服务实例的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  要删除的访问控制策略组ID。
     * @example `ipv6transacl-bp1de2****`
     */
    "AclId": string;
}
