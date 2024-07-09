export interface ListServiceInstancesResponse {
    /**
     * 下一个查询开始Token。
     * @example `AAAAAfu+XtuBE55iRLHEYYuojI4=`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `E50287CB-AABF-4877-92C0-289B339A1546`
     */
    RequestId: string;
    /**
     * 结果总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 分页查询时，每页显示的行数。每页最大100行，默认为20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 服务实例信息。
     */
    ServiceInstances: {
        /**
         * 服务实例名称。
         * @example `TestName`
         */
        Name: string;
        /**
         * 服务实例状态。可能值：
         * - Created：已创建。
         * - Deploying：部署中。
         * - DeployedFailed：部署失败。
         * - Deployed：已部署。
         * - Upgrading：升级中。
         * - Deleting：删除中。
         * - Deleted：已删除。
         * - DeletedFailed：删除失败。
         * @example `Deployed`
         */
        Status: string;
        /**
         * 服务实例输出信息。
         * @example `{"managementUrl": "http://xx.xx"}`
         */
        Outputs: string;
        /**
         * 更新时间。
         * @example `2021-05-20T00:00:00Z`
         */
        UpdateTime: string;
        /**
         * 服务实例参数信息。
         * @example `{"param":"value"}`
         */
        Parameters: string;
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
         * 服务实例的部署信息描述。
         * @example `deploy successfully`
         */
        StatusDetail: string;
        /**
         * 服务实例的部署进度，单位：%。
         * @example `90`
         */
        Progress: number;
        /**
         * 资源列表。
         * @example `[{"StackId": "stack-xxx"}]`
         */
        Resources: string;
        /**
         * 模板名称。
         * @example `模板1`
         */
        TemplateName: string;
        /**
         * 被代运维的服务实例ID。
         * @example `si-d6ab3a63ccbb4b17****`
         */
        OperatedServiceInstanceId: string;
        /**
         * 服务。
         */
        Service: {
            /**
             * 服务状态。
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
             * @example `1.0`
             */
            Version: string;
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
             * @example `service-0e6fca6a51a54420****`
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
             * 商品规格。
             */
            Commodity: {
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
                /**
                 * 类型。可能的值：
                 * - Marketplace：云市场。
                 * - Css：凌霄。
                 * - SaasBoost：Saas Boost。
                 * @example `Marketplace`
                 */
                Type: string;
            };
        };
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
         * 服务实例是否有代运维功能。可能的值：
         * - true：服务实例有代运维功能。
         * - false：服务实例没有代运维功能。
         * @example `true`
         */
        EnableInstanceOps: boolean;
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
         * 服务实例创建来源。
         * @example `Supplier`
         */
        Source: string;
        /**
         * 服务实例过期时间。
         * @example `2022-01-01T12:00:00`
         */
        EndTime: string;
        /**
         * 服务类型。可能的值：
         * - private：部署在用户账户下。
         * - managed：托管在服务商账户下。
         * - operation：代运维服务。
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
         * 云市场实例ID。
         * @example `5827****`
         */
        MarketInstanceId: string;
        /**
         * 资源组ID。
         * @example `rg-aekz6scpcxxxxxx`
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
         * 订单ID。
         * @example `2306175xxxxxxxx`
         */
        OrderId: string;
    }[];
}
