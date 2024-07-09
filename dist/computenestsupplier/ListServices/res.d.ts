export interface ListServicesResponse {
    /**
     * 下一个查询开始token。
     * @example `AAAAAfu+XtuBE55iRLHEYYuojI4=`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `51945B04-6AA6-410D-93BA-236E0248B104`
     */
    RequestId: string;
    /**
     * 符合条件的记录总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `1`
     */
    MaxResults: number;
    /**
     * 服务列表。
     */
    Services: {
        /**
         * 服务状态。可能的值：
         * - Draft：草稿状态。
         * - Submitted：已提交审核。不允许修改。
         * - Approved：已通过审核。不允许修改，可以发布上线。
         * - Launching：服务上线中。
         * - Online：已上线。
         * - Offline：已下线。
         * @example `Online`
         */
        Status: string;
        /**
         * 共享权限是否为默认版本。取值：
         * - false：不是默认版本。
         * - true：是默认版本。
         * @example `true`
         */
        DefaultVersion: boolean;
        /**
         * 发布时间。
         * @example `2021-05-21T00:00:00Z`
         */
        PublishTime: string;
        /**
         * 服务版本。
         * @example `1.0`
         */
        Version: string;
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
        DeployType: string;
        /**
         * 服务ID。
         * @example `service-70a3b15bb62643xxxxxx`
         */
        ServiceId: string;
        /**
         * 服务商地址。
         * @example `http://example.com`
         */
        SupplierUrl: string;
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
         * @example `A有限公司`
         */
        SupplierName: string;
        /**
         * 服务信息。
         */
        ServiceInfos: {
            /**
             * 服务配置语言。可能的值：
             * - zh-CN：中文。
             * - en-US：英文。
             * @example `zh-CN`
             */
            Locale: string;
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
             * 服务概述。
             * @example `B是A公司自主设计并研发的开源分布式的关系型数据库`
             */
            ShortDescription: string;
        }[];
        /**
         * 云市场商品code。
         * @example `cmjj00xxxx`
         */
        CommodityCode: string;
        /**
         * 创建时间。
         * @example `2021-05-20T00:00:00Z`
         */
        CreateTime: string;
        /**
         * 更新时间。
         * @example `2021-05-21T00:00:00Z`
         */
        UpdateTime: string;
        /**
         * 共享类型。可能的值：
         * - Public：公开的，正式部署和试用部署都不受限。
         * - Restricted：受限的，正式部署和试用部署都受限。
         * - OnlyFormalRestricted：仅正式部署受限。
         * - OnlyTrailRestricted：仅试用部署受限。
         * - Hidden：隐藏的，不可见且不可申请部署权限。
         * @example `Public`
         */
        ShareType: string;
        /**
         * 服务使用申请审批类型，可能的值：
         * - Manual：手动审批。
         * - AutoPass：自动通过。
         * @example `AutoPass`
         */
        ApprovalType: string;
        /**
         * 服务商自定义版本名称。
         * @example `v2.0.0`
         */
        VersionName: string;
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
         * 部署物ID。
         * @example `artifact-21ca53ac16a643xxxxxx`
         */
        ArtifactId: string;
        /**
         * 部署物版本。
         * @example `draft`
         */
        ArtifactVersion: string;
        /**
         * 源镜像。
         * @example `centos_7`
         */
        SourceImage: string;
        /**
         * 部署物关联类型。可能的值：
         * - ServiceDeployment：服务部署。
         * - ServiceUpgrade：服务升级。
         * @example `ServiceDeployment`
         */
        RelationType: string;
        /**
         * 试用类型。可选值：
         * - Trial：支持试用。
         * - NotTrial：不支持试用。
         * @example `Trial`
         */
        TrialType: string;
        /**
         * 托管版服务的租户类型。可能的值：
         * - SingleTenant：单租户。
         * - MultiTenant：多租户。
         * @example `SingleTenant`
         */
        TenantType: string;
        /**
         * 资源组ID。
         * @example `rg-aekz5b555xxxxxx`
         */
        ResourceGroupId: string;
        /**
         * 分销源服务ID。
         * @example `service-70a3b15bb62643xxxxxx`
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
         * 分销服务ID。
         * @example `service-70a3b15bb62643xxxxxx`
         */
        ResellServiceId: string;
        /**
         * 最新的分销源服务版本。
         * @example `1`
         */
        LatestResellSourceServiceVersion: string;
        /**
         * 服务的分销授权状态。可能的值：
         * - CanApply：可申请。
         * - Applied：已申请。
         * - Approved：已通过。
         * @example `CanApply`
         */
        ResellApplyStatus: string;
        /**
         * 是否是虚拟互联网服务。可能的值：
         * - false：否。
         * - true：是。
         * @example `false`
         */
        VirtualInternetService: string;
        /**
         * 服务分类。
         * @example `OpenSource`
         */
        Categories: string;
        /**
         * 服务是否可发现。可能的值：
         * - INVISIBLE：不可发现。
         * - DISCOVERABLE：可发现。
         * @example `INVISIBLE`
         */
        ServiceDiscoverable: string;
        /**
         * 当前服务是否有Draft版本。可能的值：
         * - true：是。
         * - false：否。
         * @example `true`
         */
        HasDraft: boolean;
        /**
         * 当前服务是否有Beta版本。可能的值：
         * - true：是。
         * - false：否。
         * @example `true`
         */
        HasBeta: boolean;
        /**
         * 构建服务信息。
         * @example `{ "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}`
         */
        BuildInfo: string;
        /**
         * 商品规格。
         */
        Commodity: {
            /**
             * 商品code。
             * @example `cmjj00xxxx`
             */
            CommodityCode: string;
            /**
             * 类型。可能的值：
             * - Marketplace：云市场。
             * - Css：凌霄。
             * - SaasBoost：Saas Boost。
             * @example `Marketplace`
             */
            Type: string;
            /**
             * SaasBoost配置元数据。
             * @example `{
                 //开启/关闭SaaS Boost绑定
                "Enabled":true/false,默认为false
                //公网交互地址
                "PublicAccessUrl":"https://example.com"
            }`
             */
            SaasBoostMetadata: string;
        };
    }[];
}
