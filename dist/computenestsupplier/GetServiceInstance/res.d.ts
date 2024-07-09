export interface GetServiceInstanceResponse {
    /**
     * 服务实例的部署状态。可能值：
     * - Created：已创建
     * - Deploying：部署中
     * - DeployedFailed：部署失败
     * - Deployed：已部署
     * - Upgrading：升级中
     * - Deleting：删除中
     * - Deleted：已删除
     * - DeletedFailed：删除失败
     * @example `Deployed`
     */
    Status: string;
    /**
     * 模板名称。
     * @example `模板1`
     */
    TemplateName: string;
    /**
     * 更新时间。
     * @example `2021-05-20T00:00:00Z`
     */
    UpdateTime: string;
    /**
     * 请求ID。
     * @example `
    4DB0F536-B3BE-4F0D-BD29-E83FB56D550C`
     */
    RequestId: string;
    /**
     * 服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    ServiceInstanceId: string;
    /**
     * 创建时间。
     * @example `2021-05-20T00:00:00Z`
     */
    CreateTime: string;
    /**
     * 用户AliUid。
     * @example `1234567`
     */
    UserId: number;
    /**
     * 服务商AliUid。
     * @example `1964460391538545`
     */
    SupplierUid: number;
    /**
     * 服务详情。
     */
    Service: {
        /**
         * 服务状态。可能的值：
         * Draft：待提交注册。
         * Submited：已提交注册。
         * Approved：已通过注册审核。
         * Online：已上线。
         * Offline：已下线。
         * Deleted：已删除。
         * Launching：服务上线中。
         * @example `Online`
         */
        Status: string;
        /**
         * 发布时间。
         * @example `2021-05-21T00:00:00Z`
         */
        PublishTime: string;
        /**
         * 服务版本。
         * @example `1`
         */
        Version: string;
        /**
         * 存储服务部署配置的信息。存储的信息与部署类型有关，不同的部署类型存储的数据格式不一样，因此使用JSON String格式进行数据存储。
         * @example `{
              "EstimateTime": null,
              "SupplierDeployMetadata": {
                    "DeployTimeout": null
              },
              "TemplateConfigs": [
                    {
                          "Name": "模板1",
                          "Url": "https://service-info-private.oss-cn-hangzhou.aliyuncs.com/130920852836****​/template/af11ec5a-09a0-4aa7-970c-09b51e2a****.json",
                          "PredefinedParameters": [],
                          "AllowedRegions": [
                                "cn-hangzhou"
                          ]
                    }
              ]
        }`
         */
        DeployMetadata: string;
        /**
         * 部署类型。可能值：
         * - ros：通过ROS部署。
         * - terraform：通过Terraform部署。
         * - ack：通过ACK部署。
         * - spi：调用SPI部署。
         * - operation：代运维服务部署。
         * @example `ros`
         */
        DeployType: string;
        /**
         * 服务ID。
         * @example `service-9c8a3522528b4fe8****`
         */
        ServiceId: string;
        /**
         * 服务商地址。
         * @example `http://example.com`
         */
        SupplierUrl: string;
        /**
         * 产品页URL。
         * @example `https://service-info-private.oss-cn-hangzhou.aliyuncs.com`
         */
        ServiceProductUrl: string;
        /**
         * 产品文档的URL。
         * @example `http://example.com`
         */
        ServiceDocUrl: string;
        /**
         * 服务类型。可能值：
         * - private：部署在用户账户下。
         * - managed：托管在服务商账户下。
         * - operation：代运维服务。
         * @example `private`
         */
        ServiceType: string;
        /**
         * 服务商名称。
         * @example `A公司`
         */
        SupplierName: string;
        /**
         * 服务信息。
         */
        ServiceInfos: {
            /**
             * 服务实例语言。
             * @example `zh-CN`
             */
            Locale: string;
            /**
             * 服务图标地址。
             * @example `https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png`
             */
            Image: string;
            /**
             * 服务名称。
             * @example `B数据库`
             */
            Name: string;
            /**
             * 服务概述。
             * @example `B是A公司自主设计并研发的开源分布式的关系型数据库`
             */
            ShortDescription: string;
        }[];
        /**
         * 服务商自定义版本名称。
         * @example `版本A`
         */
        VersionName: string;
        /**
         * 可升级的服务版本号。
         */
        UpgradableServiceVersions: string[];
    };
    /**
     * 部署服务实例输入的参数。
     * @example `{
          "param": "value"
    }`
     */
    Parameters: string;
    /**
     * 服务实例的部署进度，单位：%。
     * @example `90`
     */
    Progress: number;
    /**
     * 部署实例的状态描述。
     * @example `deploy successfully`
     */
    StatusDetail: string;
    /**
     * 代运维开始时间。
     * @example `2021-12-29T06:48:56Z`
     */
    OperationStartTime: string;
    /**
     * 代运维结束时间。
     * @example `2022-01-28T06:48:56Z`
     */
    OperationEndTime: string;
    /**
     * 被代运维的服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    OperatedServiceInstanceId: string;
    /**
     * 服务实例的代运维功能是否开启。可能值：
     * - true：服务实例的代运维功能已开启
     * - false：服务实例的代运维功能未开启
     * @example `true`
     */
    IsOperated: boolean;
    /**
     * 服务实例是否有代运维功能。可能的值：
     * - true：服务实例有代运维功能
     * - false：服务实例没有代运维功能
     * @example `true`
     */
    EnableInstanceOps: boolean;
    /**
     * 资源列表。
     * @example `[
          {
                "StackId": "stack-xxx"
          }
    ]`
     */
    Resources: string;
    /**
     * 网络配置信息。
     * > 该参数已废弃。
     */
    NetworkConfig: {
        /**
         * 私网连接的终端节点服务ID。
         * > 该参数已废弃。
         * @example `epsrv-5ei07324541816bxxxx`
         */
        EndpointServiceId: string;
        /**
         * 私网连接的终端节点id。
         * > 该参数已废弃。
         * @example `ep-m5ei37240541816b****`
         */
        EndpointId: string;
        /**
         * 私网连接信息。
         */
        PrivateVpcConnections: {
            /**
             * 私网连接的终端节点ID。
             * @example `ep-m5ei37240541816b****`
             */
            EndpointId: string;
            /**
             * 私网连接的终端节点服务ID。
             * @example `epsrv-5ei07324541816bxxxx`
             */
            EndpointServiceId: string;
            /**
             * 自定义域名。
             * @example `test.computenest.aliyuncs.com`
             */
            PrivateZoneName: string;
            /**
             * 网络配置信息。
             * 主要用于私网连接。
             */
            ConnectionConfigs: {
                /**
                 * 专有网络ID。
                 * @example `vpc-bp1vwnn14rqpyiczj****`
                 */
                VpcId: string;
                /**
                 * 安全组名称。
                 */
                SecurityGroups: string[];
                /**
                 * 虚拟交换机名称。
                 */
                VSwitches: string[];
                /**
                 * IngressEndpoint状态。可能的值：
                 * - Ready（已连接）。
                 * - Pending（连接中）。
                 * - Failed（连接失败）。
                 * - Deleted（已删除）。
                 * - Deleting（删除中）。
                 * @example `Ready`
                 */
                IngressEndpointStatus: string;
                /**
                 * NetworkServiceStatus状态。可能的值：
                 * - Ready（已连接）。
                 * - Pending（连接中）。
                 * - Failed（连接失败）。
                 * - Deleted（已删除）。
                 * - Deleting（删除中）。
                 * @example `Ready`
                 */
                NetworkServiceStatus: string;
                /**
                 * 私网连接终端节点IP。
                 */
                EndpointIps: string[];
                /**
                 * 域名名称。
                 * @example `example.com`
                 */
                DomainName: string;
                /**
                 * 使用计算巢内网互联建立连接的限速带宽。
                 * @example `1536Mbps`
                 */
                ConnectBandwidth: number;
            }[];
        }[];
        /**
         * 反向私网连接信息。
         */
        ReversePrivateVpcConnections: {
            /**
             * 反向私网连接的终端节点ID。
             * @example `ep-m5ei42370541816b****`
             */
            EndpointId: string;
            /**
             * 私网连接的终端节点服务ID。
             * @example `epsrv-5ei07324541816bxxxx`
             */
            EndpointServiceId: string;
        }[];
    };
    /**
     * 用户自定义标签。
     */
    Tags: {
        /**
         * 标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 创建服务实例返回的输出字段。
     * - ROS模式下，返回模板所有输出字段。
     * - SPI模式下，返回ISV输出字段和计算巢附加功能输出字段。
     * @example `{
          "InstanceIds": [
                "i-hp38ofxl0dsyfi7z****"
          ]
    }`
     */
    Outputs: string;
    /**
     * 服务实例过期时间。
     * @example `2022-01-01T12:00:00`
     */
    EndTime: string;
    /**
     * 服务实例来源。可能的值：
     * - User：计算巢用户。
     * - Market：云市场。
     * - Supplier：计算巢服务商。
     * @example `User`
     */
    Source: string;
    /**
     * 服务类型。可能的值：
     * - private：部署在用户账户下的服务实例。
     * - managed：托管在服务商账户下的服务实例。
     * - operation：代运维服务实例
     * - poc：试用服务实例。
     * @example `private`
     */
    ServiceType: string;
    /**
     * 付费类型。取值范围：
     * - Permanent：永久购买。
     * - Subscription：云市场包年包月。
     * - PayAsYouGo：云市场按量付费。
     * - CustomFixTime：商家自定义固定时长。
     * @example `Subscription`
     */
    PayType: string;
    /**
     * 许可证元数据。
     * @example `{"renewType":"MONTHLY"}`
     */
    LicenseMetadata: string;
    /**
     * 服务实例名称。
     * @example `TestName`
     */
    Name: string;
    /**
     * 用户侧是否启用prometheus
     * @example `true`
     */
    EnableUserPrometheus: boolean;
    /**
     * 服务实例对应的资源目录成员用户登录url
     * @example `https://signin.aliyun.com/switchRole.htm?parentAlias=1307782318217247.onaliyun.com&roleName=ResourceDirectoryAccountAccessRole`
     */
    RdAccountLoginUrl: string;
    /**
     * 套餐名称。
     * @example `套餐一`
     */
    PredefinedParameterName: string;
    /**
     * 资源组ID。
     * @example `rg-aekzkt5buxxxxxx`
     */
    ResourceGroupId: string;
    /**
     * 服务实例的业务状态。可能的值：
     * - Normal：正常。
     * - Renewing：续费中。
     * - RenewFoiled：续费失败。
     * - Expired：已过期。
     * @example `Normal`
     */
    BizStatus: string;
    /**
     * grafana大盘链接。
     * @example `https://g.xxxxxx.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxxxx-quickstart-and-dashboard?orgId=355401&refresh=10s`
     */
    GrafanaDashBoardUrl: string;
}
