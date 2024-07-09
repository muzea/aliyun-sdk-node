export interface RemoveSourcesFromPrometheusGlobalViewRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 聚合实例名称
     * @example `zyGlobalView`
     */
    "GroupName": string;
    /**
     * 聚合实例ID。
     * @example `global-v2-cn-1478326682034601-vss8pd0i`
     */
    "GlobalViewClusterId": string;
    /**
     * 自定义数据源的SourceName列表，可以是多个，需要用英文逗号（,）分隔。
     * @example `localPrometheusClusterName,testCumterPrometheusName`
     */
    "SourceNames": string;
}
