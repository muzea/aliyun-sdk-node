export interface GetServiceResponse {
    /**
     * 服务状态。
     * 取值：
     * - Draft：草稿状态。
     * - Submitted：已提交审核。不允许修改。
     * - Approved：已通过审核。不允许修改，可以发布上线。
     * - Launching：服务上线中。
     * - Online：已上线。
     * - Offline：已下线。
     * - Beta：预发布状态。
     * - Creating：服务创建中。
     * - CreateFailed：服务创建失败。
     * - Updating：服务更新中。
     * - UpdateFailed：服务更新失败 。
     * @example `Online`
     */
    Status: string;
    /**
     * 存储服务部署配置的信息。
     * 存储的信息与部署类型有关，不同的部署类型存储的数据格式不一样，因此使用JSON String格式进行数据存储。
     * @example `{\"TemplateConfigs\":[{\"Name\":\"模板1\",\"Url\":\"oss://computenest-test/template"
                + ".json?RegionId=cn-beijing\",\"PredefinedParameters\":[{\"Name\":\"低配版\","
                + "\"Parameters\":{\"InstanceType\":\"ecs.g5.large\",\"DataDiskSize\":40}},{\"Name\":\"高配版\","
                + "\"Parameters\":{\"InstanceType\":\"ecs.g5.large\",\"DataDiskSize\":200}}]}]}`
     */
    DeployMetadata: string;
    /**
     * 发布时间。
     * @example `2021-05-21T00:00:00Z`
     */
    PublishTime: string;
    /**
     * 请求ID。
     * @example `9AC8E73E-88DE-52C2-A29B-531FC13A5604`
     */
    RequestId: string;
    /**
     * 服务版本。
     * @example `1.0`
     */
    Version: string;
    /**
     * 部署类型。
     * 取值：
     * - ros：通过ROS部署。
     * - terraform：通过Terraform部署。
     * - spi：调用SPI部署。
     * - operation：代运维服务部署。
     * - container：通过容器部署。
     * @example `ros`
     */
    DeployType: string;
    /**
     * 服务ID。
     * @example `service-ca83ff3cb6b14dbc****`
     */
    ServiceId: string;
    /**
     * 服务商地址。
     * @example `http://example.com`
     */
    SupplierUrl: string;
    /**
     * 产品文档的URL。
     * @example `http://example1.com`
     */
    ServiceDocUrl: string;
    /**
     * 产品页URL。
     * @example `http://example2.com`
     */
    ServiceProductUrl: string;
    /**
     * 服务类型。
     * 取值：
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
         * 服务配置语言。
         * 取值：
         * - zh-CN：中文。
         * - en-US：英文。
         * @example `zh-CN`
         */
        Locale: string;
        /**
         * 服务图标地址。
         * @example `https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f35660****.png`
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
        /**
         * 服务详细描述的地址。
         * @example `https://example.com`
         */
        LongDescriptionUrl: string;
        /**
         * 服务的协议文档信息。
         */
        Agreements: {
            /**
             * 协议名称。
             * @example `Name`
             */
            Name: string;
            /**
             * 协议链接。
             * @example `https://aliyun.com/xxxxxxxx.html`
             */
            Url: string;
        }[];
    }[];
    /**
     * 云市场商品code。
     * @example `cmjj00****`
     */
    CommodityCode: string;
    /**
     * 是否代运维。
     * 取值：
     * - true：开启。
     * - false：关闭。
     * @example `false`
     */
    IsSupportOperated: boolean;
    /**
     * 策略名称。
     * 单个策略名称长度不超过128个字符，多个名称使用英文逗号（,）分隔。暂时只支持代运维相关参数策略。
     * @example `policyName1, policyName2`
     */
    PolicyNames: string;
    /**
     * 代运维时间。单位：秒。
     * @example `259200`
     */
    Duration: number;
    /**
     * 服务实例的部署进度，单位：%。
     * @example `90`
     */
    Progress: number;
    /**
     * 服务状态描述。
     * @example `deploy successfully`
     */
    StatusDetail: string;
    /**
     * 创建时间。
     * @example `2021-05-20T00:00:00Z`
     */
    CreateTime: string;
    /**
     * 更新时间。
     * @example `2021-05-22T00:00:00Z`
     */
    UpdateTime: string;
    /**
     * 共享类型。
     * 取值：
     * - Public：公开的，正式部署和试用部署都不受限。
     * - Restricted：受限的，正式部署和试用部署都受限。
     * - OnlyFormalRestricted：仅正式部署受限。
     * - OnlyTrailRestricted：仅试用部署受限。
     * - Hidden：隐藏的，不可见且不可申请部署权限。
     * @example `Public`
     */
    ShareType: string;
    /**
     * 服务报警配置。
     * @example `{
      "TemplateUrl": "http://template.file.url",
      // 应用分组级别告警元数据
      "ApplicationGroups": [
        {
          "Name": "applicationGroup1",
          "TemplateUrl": "url1"
        },
        {
          "Name": "applicationGroup2",
          "TemplateUrl": "url2"
        }
      ]
    }`
     */
    AlarmMetadata: string;
    /**
     * 升级元数据。
     * @example `{\"SupportRollback\":true,\"SupportUpgradeFromVersions\":[],\"UpgradeComponents\":[\"Configuration\"]}`
     */
    UpgradeMetadata: string;
    /**
     * 版本名称。
     * @example `v1`
     */
    VersionName: string;
    /**
     * 付费来源。
     * 取值：
     * - None：不付费。
     * - Marketplace：云市场付费。
     * - Custom：自定义付费。
     * @example `None`
     */
    PayFromType: string;
    /**
     * 付费类型。
     * 取值：
     * - Permanent：永久购买。
     * - Subscription：云市场包年包月。
     * - PayAsYouGo：云市场按量付费。
     * - CustomFixTime：商家自定义固定时长。
     * @example `Permanent`
     */
    PayType: string;
    /**
     * 默认许可证日期。单位：天。取值范围：1~1000。
     * @example `1`
     */
    DefaultLicenseDays: number;
    /**
     * 服务标签。
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
     * 试用时长。单位：天。
     * @example `7`
     */
    TrialDuration: number;
    /**
     * 试用类型。
     * 取值：
     * - Trial：支持试用。
     * - NotTrial：不支持试用。
     * @example `Trial`
     */
    TrialType: string;
    /**
     * 租户类型。
     * 取值：
     * - SingleTenant：单租户。
     * - MultiTenant：多租户。
     * @example `SingleTenant`
     */
    TenantType: string;
    /**
     * 许可证元数据。
     * @example `{\"PayType\":\"CustomFixTime\",\"DefaultLicenseDays\":7,\"CustomMetadata\":[{\"TemplateName\":\"模板1\",\"SpecificationName\":\"bandwith-0\",\"CustomData\":\"1\"}]}`
     */
    LicenseMetadata: string;
    /**
     * 代运维配置。
     * @example `{\"PrometheusConfigMap\":{\"New_Vpc_Ack_And_Jumpserver\":{}}}`
     */
    OperationMetadata: string;
    /**
     * 测试状态。
     * 取值：
     * - CONFIG_IS_NULL：测试配置不存在。
     * - SERVICE_TEST_SUCCEED：服务测试通过。
     * - SERVICE_TSET_DOING：服务测试尚未通过。
     * @example `SERVICE_TEST_SUCCEED`
     */
    TestStatus: string;
    /**
     * 服务使用申请审批类型。
     * 取值：
     * - Manual：收到审批。
     * - AutoPass：自动通过。
     * @example `Manual`
     */
    ApprovalType: string;
    /**
     * 注册ID。
     * @example `sr-1b4aabc1c9eb4109****`
     */
    RegistrationId: string;
    /**
     * 资源组ID。
     * @example `rg-acfm2jfvb7b****`
     */
    ResourceGroupId: string;
    /**
     * 权限类型。
     * 取值：
     * - Deployable：可部署。
     * - Accessible：可访问。
     * @example `Deployable`
     */
    Permission: string;
    /**
     * 统计信息。
     */
    Statistic: {
        /**
         * 累计实例数。
         * 包含历史已删除的实例。
         * @example `75`
         */
        AccumulativeInstanceCount: number;
        /**
         * 累计用户数。
         * 包含历史用户。
         * @example `60`
         */
        AccumulativeUserCount: number;
        /**
         * 线上实例数。
         * 当前已成功部署的实例数。
         * @example `20`
         */
        DeployedServiceInstanceCount: number;
        /**
         * 线上用户数。
         * 当前已成功部署的实例对应的用户数。
         * @example `10`
         */
        DeployedUserCount: number;
        /**
         * 待审核（Submitted状态）的服务申请个数。
         * @example `10`
         */
        SubmittedUsageCount: number;
        /**
         * 试用累计消耗金额。单位：元。
         * @example `80.35`
         */
        AccumulativePocAmount: number;
        /**
         * 试用服务实例平均消耗金额。单位：元。
         * @example `40.17`
         */
        AveragePocAmount: number;
        /**
         * 试用服务实例平均单位时间消耗金额。单位：元。
         * @example `167.9`
         */
        AveragePocUnitAmount: number;
        /**
         * 试用服务实例平均时长。单位：时。
         * @example `1`
         */
        AveragePocDuration: number;
    };
    /**
     * 分销源服务ID。
     * @example `service-70a3b15bb6264315****`
     */
    SourceServiceId: string;
    /**
     * 分销源服务版本。
     * @example `1`
     */
    SourceServiceVersion: string;
    /**
     * 分销源服务商名称。
     * @example `SourceSupplier`
     */
    SourceSupplierName: string;
    /**
     * 应用日志配置。
     * @example `{
      "Logstores": [
        {
            "LogstoreName": "access-log",
            "LogPath": "/home/admin/app/logs", # 对容器不需要，在YAML中配置
            "FilePattern": "access.log*" # 对容器不需要，在YAML中配置
        }
      ]
    }`
     */
    LogMetadata: string;
    /**
     * 是否支持分销。
     * 取值：
     * - false：不支持。
     * - true：支持。
     * @example `false`
     */
    Resellable: boolean;
    /**
     * 是否是虚拟互联网服务。
     * 取值：
     * - false：否。
     * - true：是。
     * @example `false`
     */
    VirtualInternetService: string;
    /**
     * 服务是否可发现。
     * 取值：
     * - INVISIBLE：不可发现。
     * - DISCOVERABLE：可发现。
     * @example `DISCOVERABLE`
     */
    ServiceDiscoverable: string;
    /**
     * 服务分类。
     * @example `DevOps`
     */
    Categories: string;
    /**
     * 服务共享状态。
     * ><notice>该参数已弃用。></notice>
     * @example `该参数已弃用。`
     */
    ShareTypeStatus: string;
    /**
     * 服务审核文件URL。
     * @example `https://service-info-public.oss-cn-hangzhou.aliyuncs.com/169070753192****​/service-document/be3382cd-e198-41a4-a697-f8707ec1****.docx`
     */
    ServiceAuditDocumentUrl: string;
    /**
     * 上报源。
     */
    EntitySource: any;
    /**
     * 商品模块绑定关系。
     * @example `componesConfigs`
     */
    CrossRegionConnectionStatus: string;
    /**
     * 虚拟互联网服务ID。
     * @example `service-70a3b15bb6264345****`
     */
    VirtualInternetServiceId: string;
    /**
     * 商品规格。
     */
    Commodity: {
        /**
         * 类型。
         * 取值：
         * - Marketplace：云市场。
         * - Css：凌霄。
         * @example `Marketplace`
         */
        Type: string;
        /**
         * 付费类型。
         * 取值：
         * - **PREPAY**（默认值）：预付费，即包年包月。
         * - **POSTPAY**：后付费，即按量付费。
         * @example `PREPAY`
         */
        ChargeType: string;
        /**
         * 商品模块。
         */
        Components: string[];
        /**
         * 云市场规格详情。
         */
        Specifications: {
            /**
             * 商品code。
             * @example `cmjj00****`
             */
            Code: string;
            /**
             * 规格名称。
             * @example `specifications1`
             */
            Name: string;
            /**
             * 允许购买的时长。单位：周或者年。
             */
            Times: string[];
        }[];
        /**
         * 计量项信息。
         */
        MeteringEntities: {
            /**
             * 计量项ID。
             * @example `cmgj5682****-NetworkOut`
             */
            EntityId: string;
            /**
             * 计量项属性名称。
             * @example `spring-boot-demo`
             */
            Name: string;
        }[];
        /**
         * 云市场元数据信息。
         */
        MarketplaceMetadata: {
            /**
             * 商品规格与模板或套餐的关系。
             */
            SpecificationMappings: {
                /**
                 * 云市场商品规格code。
                 * @example `cmjj00****`
                 */
                SpecificationCode: string;
                /**
                 * 模板名称。
                 * @example `模板1`
                 */
                TemplateName: string;
                /**
                 * 套餐名称。
                 * @example `按量付费`
                 */
                SpecificationName: string;
                /**
                 * 试用类型。
                 * 取值：
                 * - Trial：支持试用。
                 * - NotTrial：不支持试用。
                 * @example `NotTrial`
                 */
                TrialType: string;
            }[];
            /**
             * 套餐与计量维度的绑定关系。
             */
            MeteringEntityMappings: {
                /**
                 * 计量项ID。
                 * @example `cmgj1596****-NetworkOut-2`
                 */
                EntityIds: string;
                /**
                 * 模板名称。
                 * @example `模板1`
                 */
                TemplateName: string;
                /**
                 * 套餐名称。
                 * @example `按量付费套餐`
                 */
                SpecificationName: string;
            }[];
            /**
             * 计量项配置信息。
             */
            MeteringEntityExtraInfos: {
                /**
                 * 计量项ID。
                 * @example `cmgj1596****-NetworkOut-2`
                 */
                EntityId: string;
                /**
                 * 计量指标。
                 * @example `AvgPod`
                 */
                Type: string;
                /**
                 * 计量指标名称。
                 * @example `NetworkLantency`
                 */
                MetricName: string;
                /**
                 * 自定义prometheus语句。
                 * @example `avg_over_time(count(kube_pod_info{namespace=\"default\"})[1h:1m])`
                 */
                Promql: string;
            }[];
        };
        /**
         * 凌霄配置元数据。
         */
        CssMetadata: {
            /**
             * 计费项映射。
             */
            ComponentsMappings: {
                /**
                 * 映射关系。
                 */
                Mappings: any;
                /**
                 * 模板名称。
                 * @example `模板1`
                 */
                TemplateName: string;
            }[];
            /**
             * 套餐与计量维度的绑定关系。
             */
            MeteringEntityMappings: {
                /**
                 * 计量项ID。
                 * @example `cmgj0015****-Frequency-1`
                 */
                EntityIds: string;
                /**
                 * 模板名称。
                 * @example `模板1`
                 */
                TemplateName: string;
                /**
                 * 套餐名称。
                 * @example `按量付费套餐`
                 */
                SpecificationName: string;
            }[];
            /**
             * 计量项配置信息。
             */
            MeteringEntityExtraInfos: {
                /**
                 * 计量项ID。
                 * @example `cmgj0048****-Frequency-1`
                 */
                EntityId: string;
                /**
                 * 计量指标。
                 * @example `ComputeNestPrometheus`
                 */
                Type: string;
                /**
                 * 指标名称。
                 * @example `AvgMemory`
                 */
                MetricName: string;
                /**
                 * 自定义prometheus语句。
                 * @example `avg_over_time(count(kube_pod_info{namespace=\"default\"})[1h:1m])`
                 */
                Promql: string;
            }[];
        };
        /**
         * 云市场商品code。
         * @example `cmjj00xxxx`
         */
        CommodityCode: string;
        /**
         * SaasBoost配置元数据。
         * @example `{
            "Enabled":false
            //公网交互地址
            "PublicAccessUrl":"https://example.com"
        }`
         */
        SaasBoostMetadata: string;
    };
    /**
     * 构建服务信息。
     * @example `{ "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}`
     */
    BuildInfo: string;
}
