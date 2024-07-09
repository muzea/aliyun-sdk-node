export interface AssociateAclsWithListenerResponse {
    /**
     * 请求ID。
     * @example `64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF`
     */
    RequestId: string;
    /**
     * 访问控制策略组ID。
     */
    AclIds: string[];
    /**
     * 监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
}
