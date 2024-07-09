export interface CheckCanAllocateVpcPrivateIpAddressResponse {
    /**
     * 查询的私网IP地址是否可用。取值：
     * - **true**：指定交换机下，该私网IP地址没有被占用，可以使用。
     * - **false**：指定交换机下，该私网IP地址已被占用，无法使用。
     * @example `true`
     */
    CanAllocate: boolean;
    /**
     * 请求ID。
     * @example `93360B0-2969-40BF-8542-EBB34FD358AB`
     */
    RequestId: string;
}
