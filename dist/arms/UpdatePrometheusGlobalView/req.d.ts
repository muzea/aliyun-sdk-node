export interface UpdatePrometheusGlobalViewRequest {
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 聚合实例名称。
     * @example `zyGlobalView`
     */
    "GroupName"?: string;
    /**
     * 聚合实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "MostRegionId"?: string;
    /**
     * Prometheus实例ID。
     * @example `global****`
     */
    "ClusterId": string;
    /**
     * Prometheus实例的资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 需要聚合的Ali Prometheus集群或数据源的信息列表。
     * @example `[
        {
            "headers":{
    
            },
            "regionId":"cn-hangzhou",
            "sourceType":"AlibabaPrometheus",
            "extras":{
    
            },
            "clusterId":"c39a1048921e04f***********",
            "sourceName":"arms-luyao-test",
            "dataSource":"",
            "userId":"1672753***********"
        },
        {
            "headers":{
    
            },
            "regionId":"cn-beijing",
            "sourceType":"AlibabaPrometheus",
            "extras":{
    
            },
            "clusterId":"c6b6485496d5b40***********",
            "sourceName":"agent-321-测试",
            "dataSource":"",
            "userId":"1672753***********"
        },
        {
            "headers":{
    
            },
            "regionId":"cn-zhangjiakou",
            "sourceType":"AlibabaPrometheus",
            "extras":{
    
            },
            "clusterId":"c261a4f3200c446***********",
            "sourceName":"zaifeng-cardinality-01",
            "dataSource":"",
            "userId":"1672753***********"
        }
    ]`
     */
    "SubClustersJson": string;
    /**
     * 创建GlobalView时，是否要求所有子实例都校验成功时，才创建GlobalView实例。默认是false，即可以部分成功。
     * @example `true`
     */
    "AllSubClustersSuccess": boolean;
}
