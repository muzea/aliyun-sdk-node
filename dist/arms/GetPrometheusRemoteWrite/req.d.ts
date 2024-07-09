export interface GetPrometheusRemoteWriteRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。仅支持aliyun-cs、ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b**** 或 vpc-*** `
     */
    "ClusterId": string;
    /**
     * Remote Write名称。
     * @example `rw1`
     */
    "RemoteWriteName": string;
}
