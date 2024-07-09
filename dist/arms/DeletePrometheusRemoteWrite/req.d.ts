export interface DeletePrometheusRemoteWriteRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。仅支持aliyun-cs、ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b**** 或 vpc-xxxx`
     */
    "ClusterId": string;
    /**
     * 要删除的Prometheus实例Remote Write配置项的Name列表（英文逗号分隔）。
     * @example `name1,name2`
     */
    "RemoteWriteNames": string;
}
