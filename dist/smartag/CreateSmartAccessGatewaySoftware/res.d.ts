export interface CreateSmartAccessGatewaySoftwareResponse {
    /**
     * 请求ID。
     * @example `24675405-74DF-4C94-82C6-B749580C498E`
     */
    RequestId: string;
    /**
     * 购买智能接入网关APP实例的订单号。
     * @example `203000000000000`
     */
    OrderId: string;
    /**
     * 智能接入网关APP实例ID。
     * @example `sag-gnhe6sywtare5******`
     */
    SmartAGId: string;
    /**
     * 智能接入网关APP实例所属资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    ResourceGroupId: string;
}
