export interface GetApplicationResponse {
    /**
     * code码。
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
     * @example `F8DFGED-K98***************`
     */
    RequestId: string;
    /**
     * 应用信息。
     */
    Application: {
        /**
         * 应用绑定的公网SLB的IP。
         * @example `47.114.xxx.xx`
         */
        ExtSlbIp: string;
        /**
         * 应用创建者。
         * @example `ouou@117274586608****`
         */
        Owner: string;
        /**
         * 应用绑定的私网SLB的端口。
         * @example `80`
         */
        SlbPort: number;
        /**
         * 应用所属的命名空间。
         * @example `doc-test`
         */
        NameSpace: string;
        /**
         * 应用绑定的公网SLB的名称。
         * @example `aa8eee383db084f42aebc4d9f52c****`
         */
        ExtSlbName: string;
        /**
         * 应用创建时间的时间戳。
         * @example `1610550324226`
         */
        CreateTime: number;
        /**
         * 云账号ID。
         * @example `test@dd******`
         */
        UserId: string;
        /**
         * 应用的服务端口。
         * @example `8080`
         */
        Port: number;
        /**
         * 运行的应用实例数。
         * @example `1`
         */
        RunningInstanceCount: number;
        /**
         * 应用绑定的私网SLB的IP。
         * @example `192.***.***.***`
         */
        SlbIp: string;
        /**
         * 是否为Docker应用：
         * - false：非Docker应用。
         * - true：Docker应用。
         * @example `false`
         */
        Dockerize: boolean;
        /**
         * 应用描述。
         * @example `test`
         */
        Description: string;
        /**
         * 应用包含的实例数。
         * @example `1`
         */
        InstanceCount: number;
        /**
         * 应用ID。
         * @example `cfac****-847e-4325-ad56-b5c2bc54****`
         */
        AppId: string;
        /**
         * 应用绑定的私网SLB的信息。
         * @example `test`
         */
        SlbInfo: string;
        /**
         * 应用实例内存配置大小，单位为MB。
         * @example `0`
         */
        Memory: number;
        /**
         * 应用名称。
         * @example `test`
         */
        Name: string;
        /**
         * 应用部署的ECS集群ID。
         * @example `5ffc5895-****-b03a-c223c6c3****`
         */
        ClusterId: string;
        /**
         * 应用绑定的私网SLB的ID。
         * @example `lb-bp****ck3s3b9xs6x****`
         */
        SlbId: string;
        /**
         * 应用的健康检查URL
         * @example `http://127.0.0.1:8080/xyz.html`
         */
        HealthCheckUrl: string;
        /**
         * 应用部署类型：
         * - War：WAR包部署。
         * - FatJar：JAR包部署。
         * - 空：未部署。
         * @example `FatJar`
         */
        ApplicationType: string;
        /**
         * 应用绑定的公网SLB的ID。
         * @example `lb-bp1vceck3s3b9xs6x****`
         */
        ExtSlbId: string;
        /**
         * 应用所属地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 容器版本ID。
         * @example `59`
         */
        BuildPackageId: number;
        /**
         * 电子邮箱地址。
         * @example `****@***.com`
         */
        Email: string;
        /**
         * CPU核数。
         * @example `1`
         */
        Cpu: number;
        /**
         * 应用集群环境类型：
         * - 0：普通Docker集群。
         * - 1：Swarm 集群。
         * - 2：ECS集群。
         * - 3：Kubernetes集群。
         * - 4：Pandora自动注册应用集群。
         * @example `2`
         */
        ClusterType: string;
        /**
         * 应用绑定的私网SLB的名称。
         * @example `test`
         */
        SlbName: string;
        /**
         * 是否开启了URL健康检查：
         * - true：启用。
         * - false：不启用。
         * 若启用，则在应用启动过程中，EDAS将尝试探测指定的URL，如果访问正常，则认为应用已经启动。
         * @example `false`
         */
        EnableUrlCheck: boolean;
        /**
         * 是否开启了端口健康检查：
         * - true：启用。
         * - false：不启用。
         * 若启用，在应用启动过程中，EDAS将检查端口是否存在，若存在，则认为应用已经启动。
         * @example `false`
         */
        EnablePortCheck: boolean;
        /**
         * K8s应用当前所属状态，用于判断应用是否处于稳定状态，处于不稳定状态时，禁止相关的配置操作：
         * * ready：应用处于就绪状态，可以进行应用变更。
         * * progressing：应用变更中。
         * * pending：应用变更被阻塞。
         * * failed：应用变更失败。
         * 其中ready为稳定状态，其它状态为不稳定状态。
         * @example `ready`
         */
        AppPhase: string;
        /**
         * 当前用户是否有应用的管理权限(RAM鉴权模式)。
         * @example `true`
         */
        HaveManageAccess: string;
        /**
         * 创建应用时Workload的类型，目前支持Deployment和StatefulSet类型。对于ECS应用不生效。
         * @example `StatefulSet`
         */
        WorkloadType: string;
        /**
         * 资源组ID。
         * @example `rg-aekz****`
         */
        ResourceGroupId: string;
    };
}
