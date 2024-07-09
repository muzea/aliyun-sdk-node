export interface ListPrometheusInstanceByTagAndResourceGroupIdResponse {
    /**
     * Id of the request
     * @example `4789C3E9-A85A-524B-B97B-9D2B14BA06BC`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Prometheus实例列表。
         */
        PrometheusInstances: {
            /**
             * Prometheus实例ID。
             * @example `c9d5dda1aeca64220853ace304baeb03d`
             */
            ClusterId: string;
            /**
             * 地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * 用户ID。
             * @example `1672753017899***`
             */
            UserId: string;
            /**
             * Prometheus实例名。
             * @example `prom1`
             */
            ClusterName: string;
            /**
             * remote-write（Prometheus for Remote Write）
             * -   remote-write（Prometheus for Remote Write）
             * -   ecs（Prometheus for ECS）
             * -   cloud-monitor（Prometheus for 云服务中国内地）
             * -   cloud-product（Prometheus for 云服务国外）
             * -   global-view（Prometheus for GlobalView）
             * -   aliyun-cs（Prometheus for 容器服务）
             * @example `ecs`
             */
            ClusterType: string;
            /**
             * VPC ID。
             * @example `vpc-8vbtp1fsm8mir18l8rl0u`
             */
            VpcId: string;
            /**
             * 交换机ID。
             * @example `vsw-f8z73vcja1tqnw90aav5a`
             */
            VSwitchId: string;
            /**
             * 安全组ID。
             * @example `sg-f8zd1toc10wmbi1v5rom`
             */
            SecurityGroupId: string;
            /**
             * globalView实例的子实例json串。
             * @example `[
              {
                "headers": {},
                "regionId": "cn-hangzhou",
                "sourceType": "AlibabaPrometheus",
                "extras": {},
                "clusterId": "c39a1048921e04fceb039db2fb****",
                "sourceName": "arms-luyao-test",
                "dataSource": "",
                "userId": "167275301789****"
              },
              {
                "headers": {},
                "regionId": "cn-beijing",
                "sourceType": "AlibabaPrometheus",
                "extras": {},
                "clusterId": "c6b6485496d5b400abde22cb47b5****",
                "sourceName": "agent-321-测试",
                "dataSource": "",
                "userId": "167275301789****"
              },
              {
                "headers": {},
                "regionId": "cn-zhangjiakou",
                "sourceType": "AlibabaPrometheus",
                "extras": {},
                "clusterId": "c261a4f3200c446659133f1ade78****",
                "sourceName": "zaifeng-cardinality-01",
                "dataSource": "",
                "userId": "167275301789****"
              }
            ]`
             */
            SubClustersJson: string;
            /**
             * Remote Read内网地址。
             * @example `http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read`
             */
            RemoteReadIntraUrl: string;
            /**
             * Remote Read公网地址。
             * @example `http://cn-beijing.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read`
             */
            RemoteReadInterUrl: string;
            /**
             * Remote Write内网地址。
             * @example `http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v3/write`
             */
            RemoteWriteIntraUrl: string;
            /**
             * Remote Write公网地址。
             * @example `https://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v3/write`
             */
            RemoteWriteInterUrl: string;
            /**
             * Push Gateway内网地址。
             * @example `http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v2`
             */
            PushGatewayIntraUrl: string;
            /**
             * Push Gateway公网地址。
             * @example `https://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v2`
             */
            PushGatewayInterUrl: string;
            /**
             * HTTP API内网地址。
             * @example `http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx
            `
             */
            HttpApiIntraUrl: string;
            /**
             * HTTP API公网地址。
             * @example `https://cn-beijing.arms.aliyuncs.com:9443/api/v1/prometheus/xxx`
             */
            HttpApiInterUrl: string;
            /**
             * 授权Token串。
             * @example `GciOiJIUzI1NiJ9***`
             */
            AuthToken: string;
            /**
             * 付费类型。
             * - PREPAY-包年包月
             * - POSTPAY-按量付费
             * @example `POSTPAY`
             */
            PaymentType: string;
            /**
             * Grafana工作区ID。
             * @example `grafana-rnggfvhlcdl6m71l**`
             */
            GrafanaInstanceId: string;
            /**
             * Prometheus实例的资源组ID。
             * @example `rg-acfmz7nocpeidcy`
             */
            ResourceGroupId: string;
            /**
             * 资源类型
             * @example `PROMETHEUS`
             */
            ResourceType: string;
            /**
             * 标签列表。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `ac-cus-tag-3`
                 */
                TagKey: string;
                /**
                 * 标签值。
                 * @example `asg-2vc8qq7x89o11rus9uvu`
                 */
                TagValue: string;
            }[];
        }[];
    };
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
