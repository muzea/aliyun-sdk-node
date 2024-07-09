export interface DescribeBackendInfoResponse {
    /**
     * 请求ID
     * @example `0AA90E87-3506-5AA6-AFFB-A4D53B4F6231`
     */
    RequestId: string;
    /**
     * 后端服务信息
     */
    BackendInfo: {
        /**
         * 后端服务名称
         * @example `testoss2`
         */
        BackendName: string;
        /**
         * 后端服务类型
         * @example `HTTP`
         */
        BackendType: string;
        /**
         * 后端服务修改时间
         * @example `2017-12-11T15:18:09+08:00`
         */
        ModifiedTime: string;
        /**
         * 描述信息
         * @example `add`
         */
        Description: string;
        /**
         * 后端服务创建时间
         * @example `2021-11-22T11:10:46+08:00`
         */
        CreatedTime: string;
        /**
         * 后端服务ID
         * @example `6fc978bb63574146b766863dd7bdf661`
         */
        BackendId: string;
        /**
         * 后端服务在环境上的配置信息
         */
        BackendModels: {
            /**
             * 后端服务在环境上的配置ID
             * @example `5c4995d08e8b4954b0f326e8e4f2b97d`
             */
            BackendModelId: string;
            /**
             * 环境ID
             * @example `6fc978bb63574146b766863dd7bdf661`
             */
            StageModeId: string;
            /**
             * 描述信息
             * @example `testDvs 1`
             */
            Description: string;
            /**
             * 创建时间
             * @example `2021-12-20T03:22:03.000+0000`
             */
            GmtCreate: string;
            /**
             * 修改时间
             * @example `2021-12-20T03:22:03.000+0000`
             */
            GmtModified: string;
            /**
             * 环境名称
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * 后端配置
             */
            BackendConfig: {
                /**
                 * 后端服务地址
                 * @example `10.0.0.1`
                 */
                ServiceAddress: string;
                HttpTargetHostName: string;
                /**
                 * 后端服务类型。
                 * @example `VPC`
                 */
                Type: string;
                /**
                 * 后端为VPC的信息
                 */
                VpcConfig: {
                    /**
                     * 专用网络ID
                     * @example `vpc-wz9v96hqi6d14744sxqmx`
                     */
                    VpcId: string;
                    /**
                     * 专用网络中的实例ID（ECS/SLB）
                     * @example `i-uf6iaale3gfef9t9cb41`
                     */
                    InstanceId: string;
                    /**
                     * 实例对应的端口号
                     * @example `8080`
                     */
                    Port: number;
                    /**
                     * vpc授权ID
                     * @example `2zej3ehuzg9m77kvwnfpn`
                     */
                    VpcAccessId: string;
                    /**
                     * VPC 配置名称
                     * @example `dypls-cn-beijing-slb-pre`
                     */
                    Name: string;
                    /**
                     * http/https协议
                     * @example `http`
                     */
                    VpcScheme: string;
                    VpcTargetHostName: string;
                };
                /**
                 * 后端为函数计算的信息
                 */
                FunctionComputeConfig: {
                    /**
                     * 函数计算服务类型
                     * @example `HttpTrigger`
                     */
                    FcType: string;
                    /**
                     * 函数计算服务的区域ID。
                     * @example `cn-hangzhou`
                     */
                    FcRegionId: string;
                    /**
                     * 函数计算定义的ServiceName
                     * @example `myservice`
                     */
                    ServiceName: string;
                    /**
                     * 函数计算定义的FunctionName
                     * @example `edge_function`
                     */
                    FunctionName: string;
                    /**
                     * Ram授权给API网关访问函数计算的arn
                     * @example `acs:ram::31985*:role/aliyunserviceroleforbastionhostpam`
                     */
                    RoleArn: string;
                    /**
                     * 函数别名
                     * @example `testQualifier`
                     */
                    Qualifier: string;
                    /**
                     * 函数计算服务根路径
                     * @example `https://t*******.ap-*****.fcapp.run/`
                     */
                    FcBaseUrl: string;
                    /**
                     * 后端只接收业务path
                     * @example `false`
                     */
                    OnlyBusinessPath: boolean;
                };
                /**
                 * 后端为OSS的信息
                 */
                OssConfig: {
                    /**
                     * OSS 服务地域ID
                     * @example `cn-hangzhou`
                     */
                    OssRegionId: string;
                    /**
                     * OSS 桶名
                     * @example `my_bucket`
                     */
                    BucketName: string;
                };
                /**
                 * 后端为 EventBridge 的配置
                 */
                EventBridgeConfig: {
                    /**
                     * 事件总线服务所在区域ID
                     * @example `cn-hangzhou`
                     */
                    EventBridgeRegionId: string;
                    /**
                     * 事件来源。
                     * @example `dds_driver`
                     */
                    EventSource: string;
                    /**
                     * 事件总线
                     * @example `testBus`
                     */
                    EventBus: string;
                    /**
                     * Ram授权给EventBridge的arn
                     * @example `acs:ram::1975133748561***:role/aliyunserviceroleforiotlogexport`
                     */
                    RoleArn: string;
                };
                /**
                 * Mock配置信息
                 */
                MockConfig: {
                    /**
                     * Mock返回结果
                     */
                    MockResult: string;
                    /**
                     * Mock返回状态码
                     */
                    MockStatusCode: string;
                    /**
                     * Mock返回的Header
                     */
                    MockHeaders: {
                        /**
                         * Header参数名。
                         */
                        HeaderName: string;
                        /**
                         * 参数对应的值。
                         */
                        HeaderValue: string;
                    }[];
                };
                /**
                 * 服务发现类型后端的配置信息
                 */
                DiscoveryConfig: {
                    /**
                     * 注册中心类型
                     * @example `NACOS`
                     */
                    RcType: string;
                    /**
                     * Nacos配置信息
                     */
                    NacosConfig: {
                        /**
                         * Nacos服务地址
                         * @example `http://1xx.2xx.3xx.4xx:8848`
                         */
                        ServerAddress: string;
                        /**
                         * 注册在Nacos上的微服务所在的命名空间ID
                         * @example `public`
                         */
                        Namespace: string;
                        /**
                         * 注册在Nacos上的微服务所在的分组名称
                         * @example `DEFAULT_GROUP`
                         */
                        GroupName: string;
                        /**
                         * 微服务名称
                         * @example `service-provider`
                         */
                        ServiceName: string;
                        /**
                         * 微服务所在的集群名称
                         * @example `cluster1`
                         */
                        Clusters: string;
                        /**
                         * 鉴权方式
                         * @example `PASSWORD`
                         */
                        AuthType: string;
                        /**
                         * 用户名
                         * @example `username`
                         */
                        UserName: string;
                        /**
                         * 密码
                         * @example `password`
                         */
                        Password: string;
                        /**
                         * 具有mse资源管理权限的子账号的accessKey
                         * @example `A5FIDxxxxxx`
                         */
                        AccessKey: string;
                        /**
                         * 具有mse资源管理权限的子账号的secretKey
                         * @example `dl5loxxxxxx`
                         */
                        SecretKey: string;
                    };
                    ZookeeperConfig: {
                        ConnectString: string;
                        Namespace: string;
                        ServiceName: string;
                    };
                };
                ServiceTimeout: number;
                EdasConfig: {
                    MicroserviceNamespaceName: string;
                    MicroserviceNamespaceId: string;
                    MicroserviceNamespace: string;
                    ServiceName: string;
                    EdasAppId: string;
                    RegistryType: string;
                    MseInstanceId: string;
                };
            };
        }[];
    };
}
