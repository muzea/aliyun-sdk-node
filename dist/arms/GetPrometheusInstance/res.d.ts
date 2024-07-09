export interface GetPrometheusInstanceResponse {
    /**
     * Id of the request
     * @example `52C422FD-6B43-524D-B8A1-A4693294318C`
     */
    RequestId: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * Prometheus实例ID。
         * @example `c589a1b8db05c4561aefbb898ca8fb1cf`
         */
        ClusterId: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 用户ID。
         * @example `167275301789****`
         */
        UserId: string;
        /**
         * 集群名称。
         * @example `prom1`
         */
        ClusterName: string;
        /**
         * - remote-write（Prometheus for 通用）
         * -   ecs（Prometheus for ECS）
         * -   cloud-monitor（Prometheus for 云服务中国内地）
         * -   cloud-product（Prometheus for 云服务国外）
         * -   global-view（Prometheus for GlobalView）
         * -   aliyun-cs（Prometheus for 容器服务）
         * @example `remote-write`
         */
        ClusterType: string;
        /**
         * 集群所对应的VPC。（仅Prometheus for ECS透出）
         * @example `vpc-8vb02uk57qbcktqcvqqqj`
         */
        VpcId: string;
        /**
         * 交换机ID。（仅Prometheus for ECS透出）
         * @example `vsw-f8z73vcja1tqnw90aav5a`
         */
        VSwitchId: string;
        /**
         * 安全组ID。（仅Prometheus for ECS透出）
         * @example `sg-8vbdgmf4nraiqa9bx0jo`
         */
        SecurityGroupId: string;
        /**
         * globalView实例的子实例json串。
         * @example `[{"headers":{},"regionId":"cn-hangzhou","sourceType":"AlibabaPrometheus","extras":{},"clusterId":"c39a1048921e04fceb039db2fbb73***","sourceName":"arms-luyao-test","dataSource":"","userId":"167275301789***"},{"headers":{},"regionId":"cn-beijing","sourceType":"AlibabaPrometheus","extras":{},"clusterId":"c6b6485496d5b400abde22cb47b5****","sourceName":"agent-321-测试","dataSource":"","userId":"1672753017899***"},{"headers":{},"regionId":"cn-zhangjiakou","sourceType":"AlibabaPrometheus","extras":{},"clusterId":"c261a4f3200c446659133f1ade789b15e","sourceName":"zaifeng-cardinality-01","dataSource":"","userId":"167275301789***"}]`
         */
        SubClustersJson: string;
        /**
         * remote read内网地址
         * @example `http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read`
         */
        RemoteReadIntraUrl: string;
        /**
         * remote read公网地址
         * @example `http://cn-beijing.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read`
         */
        RemoteReadInterUrl: string;
        /**
         * remote write内网地址
         * @example `http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v3/write`
         */
        RemoteWriteIntraUrl: string;
        /**
         * remote write公网地址
         * @example `https://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v3/write`
         */
        RemoteWriteInterUrl: string;
        /**
         * push gateway内网地址
         * @example `http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v2`
         */
        PushGatewayIntraUrl: string;
        /**
         * push gateway公网地址
         * @example `https://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v2`
         */
        PushGatewayInterUrl: string;
        /**
         * http api内网地址
         * @example `http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx`
         */
        HttpApiIntraUrl: string;
        /**
         * http api公网地址
         * @example `https://cn-beijing.arms.aliyuncs.com:9443/api/v1/prometheus/xxx`
         */
        HttpApiInterUrl: string;
        /**
         * 授权token串
         * @example `GciOiJIUzI1NiJ9***`
         */
        AuthToken: string;
        /**
         * 权限类型：
         * readWrite、readOnly、httpReadOnly
         * @example `readWrite`
         */
        AccessType: string;
        /**
         * 付费类型。
         * - PREPAY-包年包月
         * - POSTPAY-按量付费
         * @example `PREPAY`
         */
        PaymentType: string;
        /**
         * 存储时长（天）。
         * @example `90`
         */
        StorageDuration: number;
        /**
         * 存储到期后，自动归档保存的天数（可选值：60、90、180、365）。0表示不归档保存。
         * @example `60`
         */
        ArchiveDuration: number;
        /**
         * Grafana工作区ID。
         * @example `grafana-rnggfvhlcdl6m71***`
         */
        GrafanaInstanceId: string;
        /**
         * 实例所属的资源组ID。
         * @example `rg-aek2vezare****`
         */
        ResourceGroupId: string;
        /**
         * 固定值：PROMETHEUS。
         * @example `PROMETHEUS`
         */
        ResourceType: string;
        /**
         * 实例所绑定的标签。
         */
        Tags: {
            /**
             * 标签键。
             * @example `tag1`
             */
            TagKey: string;
            /**
             * 标签值。
             * @example `tagValue1`
             */
            TagValue: string;
        }[];
    };
}
