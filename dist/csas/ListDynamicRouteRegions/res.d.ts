export interface ListDynamicRouteRegionsResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 已授权SASE全球办公服务的POP集群接入点的地域总数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 已授权SASE全球办公服务的POP集群接入点的地域列表。
     */
    Regions: string[];
}
