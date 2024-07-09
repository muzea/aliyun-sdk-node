export interface CreateSmartAccessGatewayResponse {
    /**
     * 智能接入网关实例的描述信息。
     * @example `testdesc`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `A6B9EB0F-57DB-4843-A372-04678ABF490E`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `20337777****`
     */
    OrderId: string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-nylv14tghsk26c*****`
     */
    SmartAGId: string;
    /**
     * 智能接入网关实例的名称。
     * @example `testname`
     */
    Name: string;
    /**
     * 智能接入网关实例所属的资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    ResourceGroupId: string;
}
