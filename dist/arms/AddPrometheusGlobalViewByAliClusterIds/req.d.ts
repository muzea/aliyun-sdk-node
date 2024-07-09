export interface AddPrometheusGlobalViewByAliClusterIdsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 聚合实例名称。
     * @example `zyGlobalView`
     */
    "GroupName": string;
    /**
     * 特定集群创建定制大盘的产品标识。
     * @example `adcp`
     */
    "ProductCode"?: string;
    /**
     * 集群ID列表，可以是多个，需要用英文逗号（,）分隔。
     * @example `cd1d55bef19904324a20ed0ebb86caa5c,c5b48729918ab4745a24482ac29d0973a, c00a94896641449098bf24931e4166003, cd174485c09384060ba542bc1be1185a4`
     */
    "ClusterIds": string;
}