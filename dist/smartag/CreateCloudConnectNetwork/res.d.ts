export interface CreateCloudConnectNetworkResponse {
    /**
     * 云连接网实例状态。
     * - **Active**：正常。
     * - **Pending**：待创建。
     * @example `Active`
     */
    Status: string;
    /**
     * 云连接网实例的描述信息。
     * @example `ccndesc`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `C48E8EB2-37A4-495B-A95C-29CA1FD26C82`
     */
    RequestId: string;
    /**
     * 云连接网实例ID。
     * @example `ccn-l9340rlu5ens*****`
     */
    CcnId: string;
    /**
     * 私网网段。
     * @example `172.XX.XX.0/24`
     */
    CidrBlock: string;
    /**
     * SNAT私网网段。
     * @example `172.XX.XX.0/25`
     */
    SnatCidrBlock: string;
    /**
     * 云连接网实例的名称。
     * @example `ccnname`
     */
    Name: string;
    /**
     * 云连接网实例所属的资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    ResourceGroupId: string;
}
