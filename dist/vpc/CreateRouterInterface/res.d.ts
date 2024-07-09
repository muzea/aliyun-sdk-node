export interface CreateRouterInterfaceResponse {
    /**
     * 请求ID。
     * @example `079874CD-AEC1-43E6-AC03-ADD96B6E4907`
     */
    RequestId: string;
    /**
     * 订单号，选择预付费时返回该参数。
     * @example `20210101123456`
     */
    OrderId: number;
    /**
     * 路由器接口的ID。
     * @example `ri-2ze7fbuohm****`
     */
    RouterInterfaceId: string;
}
