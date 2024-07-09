export interface DissociateAclsFromListenerResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
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
