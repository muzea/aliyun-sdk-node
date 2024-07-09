export interface CreateIpamResponse {
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED39DCAC0`
     */
    RequestId: string;
    /**
     * IPAM的实例ID。
     * @example `ipam-ccxbnsbhew0d6t****`
     */
    IpamId: string;
    /**
     * 创建IPAM后，系统默认创建的私网IPAM作用范围。
     * @example `ipam-scope-8wiontzmiy6cg0****`
     */
    PrivateDefaultScopeId: string;
    /**
     * 创建IPAM后，系统默认创建的公网IPAM作用范围。
     * @example `ipam-scope-r5c5c7bmym1brc****`
     */
    PublicDefaultScopeId: string;
}
