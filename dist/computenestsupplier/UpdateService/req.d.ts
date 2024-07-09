export interface UpdateServiceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 部署类型。可能值：
     * - ros：通过ROS部署。
     * - terraform：通过Terraform部署。
     * - spi：调用SPI部署。
     * - operation：代运维服务部署。
     * - container：通过容器部署。
     * - pkg：包服务。
     * @example `ros`
     */
    "DeployType"?: string;
    /**
     * 存储服务部署配置的信息。存储的信息与部署类型有关，不同的部署类型存储的数据格式不一样，因此使用JSON String格式进行数据存储。
     * @example `{\"EstimateTime\":null,\"SupplierDeployMetadata\":{\"DeployTimeout\":7200},\"EnableVnc\":false}`
     */
    "DeployMetadata"?: string;
    /**
     * 服务报警配置。
     * > 当**PolicyNames**中配置了报警权限策略后，该配置才会生效。
     * @example `{\"CmsTemplateId\":1162921,\"TemplateUrl\":\"https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1760465342xxxxxx/template/c072ef50-6c03-4d9c-8f0e-d1c440xxxxxx.json\"}`
     */
    "AlarmMetadata"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `788E7CP0EN9D51P`
     */
    "ClientToken"?: string;
    /**
     * 服务ID。
     * @example `service-1dda29c3eca648xxxxxx`
     */
    "ServiceId": string;
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
         * @example `B是A公司自主设计并研发的开源分布式的关系型数据库`
         */
        ShortDescription: string;
        /**
         * 服务图标地址。
         * @example `http://img.tidb.oss.url`
         */
        Image: string;
        /**
         * 服务名称。
         * @example `B数据库`
         */
        Name: string;
        /**
         * 服务详细描述的地址。
         * @example `http://description.tidb.oss.url
        `
         */
        LongDescriptionUrl: string;
        /**
         * 服务的协议文档信息。
         */
        Agreements: {
            /**
             * 协议文档名称。
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
     * @example `259200`
     */
    "Duration"?: number;
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
     * 服务版本。
     * @example `1`
     */
    "ServiceVersion"?: string;
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
     * @example `{\"PrometheusConfigMap\":{\"Custom_Image_Ecs\":{\"EnablePrometheus\":false}}}`
     */
    "OperationMetadata"?: string;
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
     * 是否支持分销。可能的值：
     * - false：不支持。
     * - true：支持。
     * @example `false`
     */
    "Resellable"?: boolean;
    /**
     * 更新选项。
     */
    "UpdateOption"?: {
        /**
         * 更新选项。可选值：
         * -  CODE：代码。
         * - PARAMETERS：参数。
         * @example `PARAMETERS`
         */
        UpdateFrom: string;
    };
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
}
