export interface ModifyCustomerGatewayAttributeResponse {
    /**
     * 请求ID。
     * @example `8AA5CE21-2E6A-4530-BDF5-F055849476E6`
     */
    RequestId: string;
    /**
     * 本地数据中心网关设备的公网IP地址。
     * @example `139.32.XX.XX`
     */
    IpAddress: string;
    /**
     * 用户网关的描述信息。
     * @example `desctest`
     */
    Description: string;
    /**
     * 用户网关的实例ID。
     * @example `cgw-bp1pvpl9r9adju6l5****`
     */
    CustomerGatewayId: string;
    /**
     * 创建用户网关的时间戳。
     * @example `1492747187000`
     */
    CreateTime: number;
    /**
     * 用户网关的名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * 用户网关所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
}
