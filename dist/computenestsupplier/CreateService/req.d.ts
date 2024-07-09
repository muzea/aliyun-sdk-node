export interface CreateServiceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `10CM943JP0EN9D51H`
     */
    "ClientToken"?: string;
    /**
     * 服务ID。
     * @example `service-0e6fca6a51a544xxxxxx`
     */
    "ServiceId"?: string;
    /**
     * 部署类型。可能值：
     * - ros：通过ROS部署。
     * - terraform：通过Terraform部署。
     * - ack：通过ACK部署。
     * - spi：调用SPI部署。
     * - operation：代运维服务部署。
     * @example `ros`
     */
    "DeployType": string;
    /**
     * 存储服务部署配置的信息。存储的信息与部署类型有关，不同的部署类型存储的数据格式不一样，因此使用JSON String格式进行数据存储。
     * @example `{\"TemplateConfigs\":[{\"Name\":\"模板1\",\"Url\":\"oss://computenest-test/template"
                + ".json?RegionId=cn-beijing\",\"PredefinedParameters\":[{\"Name\":\"低配版\","
                + "\"Parameters\":{\"InstanceType\":\"ecs.g5.large\",\"DataDiskSize\":40}},{\"Name\":\"高配版\","
                + "\"Parameters\":{\"InstanceType\":\"ecs.g5.large\",\"DataDiskSize\":200}}]}]}`
     */
    "DeployMetadata"?: string;
    /**
     * 服务类型。可能的值：
     * - private：部署在用户账户下的服务实例。
     * - managed：托管在服务商账户下的服务实例。
     * - operation：代运维服务实例
     * - poc：试用服务实例。
     * @example `private`
     */
    "ServiceType"?: string;
    /**
     * 服务详情。
     */
    "ServiceInfo"?: {
        /**
         * 服务语言。可能的值：
         * - zh-CN：中文。
         * - en-US：英文。
         * @example `zh-CN`
         */
        Locale: string;
        /**
         * 服务概述。
         * @example `TiDB是A公司自主设计、研发的开源分布式关系型数据库。`
         */
        ShortDescription: string;
        /**
         * 服务图标地址。
         * @example `http://img.tidb.oss.url`
         */
        Image: string;
        /**
         * 服务名称。
         * @example `TiDB Database`
         */
        Name: string;
        /**
         * 服务详细描述
         * @example `http://description.tidb.oss.url
        `
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
     * 是否代运维，默认为：false。可能的值：
     * - true：开启。
     * - false：关闭。
     * > 当**ServiceType**为**private**时需要填入该值。
     * @example `false`
     */
    "IsSupportOperated"?: boolean;
    /**
     * 策略名称。单个策略名称长度不超过128个字符，多个名称使用英文逗号（,）分隔。暂时只支持代运维相关参数策略。
     * @example `policyName1, policyName2`
     */
    "PolicyNames"?: string;
    /**
     * 代运维时间。单位：秒。
     * @example `0`
     */
    "Duration"?: number;
    /**
     * 服务报警配置。
     * > 当**PolicyNames**中配置了报警权限策略后，该配置才会生效。
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
    "AlarmMetadata"?: string;
    /**
     * 共享类型。可能的值：
     * - Public：公开的，正式部署和试用部署都不受限。
     * - Restricted：受限的，正式部署和试用部署都受限。
     * - OnlyFormalRestricted：仅正式部署受限。
     * - OnlyTrailRestricted：仅试用部署受限。
     * - Hidden：隐藏的，不可见且不可申请部署权限。
     * @example `Public`
     */
    "ShareType"?: string;
    /**
     * 服务使用申请审批类型。可能的值：
     * - Manual：收到审批。
     * - AutoPass：自动通过。
     * @example `Manual`
     */
    "ApprovalType"?: string;
    /**
     * 版本名称。
     * @example `Draft`
     */
    "VersionName"?: string;
    /**
     * 升级元数据。
     * @example `{\"Description\":\"xxx\",\"SupportRollback\":true,\"SupportUpgradeFromVersions\":[],\"UpgradeComponents\":[\"Configuration\"]}`
     */
    "UpgradeMetadata"?: string;
    /**
     * 试用时长。单位：天。试用时长的最长天数不超过30天。
     * @example `7`
     */
    "TrialDuration"?: number;
    /**
     * 用户自定义标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `Usage`
         */
        Key: string;
        /**
         * 标签值。
         * @example `Web`
         */
        Value: string;
    }[];
    /**
     * 租户类型。可能的值：
     * - SingleTenant：单租户。
     * - MultiTenant：多租户。
     * @example `SingleTenant`
     */
    "TenantType"?: string;
    /**
     * 许可证元数据。
     * @example `{\"PayType\":\"CustomFixTime\",\"DefaultLicenseDays\":7,\"CustomMetadata\":[{\"TemplateName\":\"模板1\",\"SpecificationName\":\"bandwith-0\",\"CustomData\":\"1\"}]}`
     */
    "LicenseMetadata"?: string;
    /**
     * 代运维配置。
     * @example `{\"PrometheusConfigMap\":{\"New_Vpc_Ack_And_Jumpserver\":{}}}`
     */
    "OperationMetadata"?: string;
    /**
     * 资源组ID。
     * @example `rg-aek25refu7r3opq`
     */
    "ResourceGroupId"?: string;
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
    "LogMetadata"?: string;
    /**
     * 分销源服务ID。
     * @example `service-70a3b15bb62643xxxxxx`
     */
    "SourceServiceId"?: string;
    /**
     * 分销源服务版本。
     * @example `1`
     */
    "SourceServiceVersion"?: string;
    /**
     * 是否支持分销。可能的值：
     * - false：不支持。
     * - true：支持。
     * @example `false`
     */
    "Resellable"?: boolean;
    /**
     * 构建服务参数。
     * @example `{ "ServiceTemplateId": "st-xxxxx"}`
     */
    "BuildParameters"?: string;
}
