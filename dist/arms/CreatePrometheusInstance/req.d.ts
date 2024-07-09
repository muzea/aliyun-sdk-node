export interface CreatePrometheusInstanceRequest {
    /**
     * 实际Region。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 类型有：
     * -  remote-write：Prometheus for Remote Write
     * -  ecs（不再支持）：Prometheus for ECS
     * -  global-view：Prometheus for GlobalView
     * -  aliyun-cs（不再支持）：Prometheus for 容器服务
     * - cloud-product（不再支持）：Prometheus for 云服务
     * - cloud-monitor（不再支持）：Prometheus for 企业云监控
     * - flink（不再支持）: Prometheus for Flink
     * @example `remote-write`
     */
    "ClusterType": string;
    /**
     * 用户专有网络VPC。当clusterType为ecs或者aliyun-cs的托管版ask容器集群时，需要传此参数。
     * @example `vpc-rpn**********`
     */
    "VpcId"?: string;
    /**
     * 用户专有网络交换机VSwitch。当clusterType为ecs或者aliyun-cs的托管版ask容器集群时，需要传此参数。
     * @example `vsw-bp1*********`
     */
    "VSwitchId"?: string;
    /**
     * 用户专有网络安全组SecurityGroup。当clusterType为ecs或者aliyun-cs的托管版ask容器集群时，需要传此参数。
     * @example `sg-bp1********`
     */
    "SecurityGroupId"?: string;
    /**
     * 用户容器服务集群ID。当clusterType为aliyun-cs时，需要传此参数。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId"?: string;
    /**
     * 用户新建集群的名称。当clusterType为remote-write、ecs、global-view时，需要传此参数。
     * 若是ecs类型实例，ClusterName的命名规则为“name-vpc-id”，且name部分的长度不允许超过24个字符，例如“mytest1-vpc-xxxxxxxxxxx”。
     * @example `clusterNameOfTest`
     */
    "ClusterName"?: string;
    /**
     * globalView实例的子实例JSON串。
     * @example `当clusterType为global-view时，需要传此参数：需要聚合的集群的信息列表；示例：
    [
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
    "SubClustersJson"?: string;
    /**
     * 创建GlobalView时，是否要求所有子实例都校验成功时，才创建GlobalView实例。默认是false，即可以部分成功。
     * @example `true`
     */
    "AllSubClustersSuccess"?: boolean;
    /**
     * 绑定的Grafana工作区ID。使用共享版Grafana时，值为“free”。
     * @example `grafana-bp1*****`
     */
    "GrafanaInstanceId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 用户自定义标签。
     * @example `[
        {
            "labelName":"labelValue"
        },
        {
            "testName":"clusterA"
        }
    ]`
     */
    "Tags"?: {
        /**
         * 标签的键（Key）。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值（Value）。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 数据存储时长（天）。
     * @example `90`
     */
    "Duration"?: number;
    /**
     * 存储到期后，自动归档保存的天数（可选值：60、90、180、365）。0表示不归档保存。
     * @example `90`
     */
    "ArchiveDuration"?: number;
}
