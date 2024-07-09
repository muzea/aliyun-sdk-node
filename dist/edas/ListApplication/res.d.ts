export interface ListApplicationResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5d6fa0bc-cc3**********`
     */
    RequestId: string;
    ApplicationList: {
        /**
         * 应用列表。
         */
        Application: {
            /**
             * 应用ID。
             * @example `00ee517d-dd7d-4d4e-****-************`
             */
            AppId: string;
            /**
             * 地域ID。
             * @example `cn-beijing:docTes`
             */
            RegionId: string;
            /**
             * 应用名称。
             * @example `doc-test-consumer`
             */
            Name: string;
            /**
             * 应用实例数。
             * @example `5`
             */
            Instances: number;
            /**
             * 应用的服务端口。
             * @example `8080`
             */
            Port: number;
            /**
             * 应用状态：
             * * RUNNING：运行中。
             * * STOPPED：已停止。
             * * DEPLOYING：正在部署。
             * * DELETING：正在删除。
             * @example `RUNNING`
             */
            State: string;
            /**
             * 应用创建时间的时间戳。
             * @example `1664208000000`
             */
            CreateTime: number;
            /**
             * 私网SLB IP地址。
             * @example `192.168.0.***`
             */
            SlbIp: string;
            /**
             * 私网SLB端口。
             * @example `80`
             */
            SlbPort: number;
            /**
             * 私网SLB监听端口。
             * @example `8088`
             */
            SlbListenerPort: number;
            /**
             * 公网SLB监听端口。
             * @example `8080`
             */
            ExtSlbListenerPort: number;
            /**
             * 容器版本ID。
             * @example `58`
             */
            BuildPackageId: number;
            /**
             * 公网SLB IP地址。
             * @example `100.100.70.***`
             */
            ExtSlbIp: string;
            /**
             * 应用部署类型：
             * - War代表WAR包部署。
             * - FatJar代表JAR包部署。
             * - Image代表镜像部署。
             * - 为空代表未部署。
             * @example `FatJar`
             */
            ApplicationType: string;
            /**
             * 应用集群环境类型：
             * - **2**：ECS集群。
             * - **3**：EDAS自带K8s集群。
             * - **5**：容器服务K8s集群。
             * @example `2`
             */
            ClusterType: number;
            /**
             * 正在运行的应用实例数量。
             * @example `0`
             */
            RunningInstanceCount: number;
            /**
             * 集群ID。
             * @example `c37aec2a-bcca-4ec1-****-************`
             */
            ClusterId: string;
            /**
             * 资源组ID。
             * @example `rg-aek24j4s4b*****`
             */
            ResourceGroupId: string;
            /**
             * K8s命名空间。
             * @example `default`
             */
            K8sNamespace: string;
            /**
             * 微服务命名空间ID。
             * @example `cn-hangzhou:test`
             */
            NamespaceId: string;
        }[];
    };
}
