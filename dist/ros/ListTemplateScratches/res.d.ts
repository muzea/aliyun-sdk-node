export interface ListTemplateScratchesResponse {
    /**
     * 请求ID。
     * @example `D1C09606-C58B-558F-9B4E-5BF263D17D09`
     */
    RequestId: string;
    /**
     * 资源场景总个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 资源场景的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 资源场景列表。
     */
    TemplateScratches: {
        /**
         * 资源场景ID。
         * @example `ts-48ad85d66cca4620****`
         */
        TemplateScratchId: string;
        /**
         * 资源场景类型，取值：
         * - ResourceImport：资源纳管。
         * - ArchitectureReplication：资源复制。
         * @example `ResourceImport`
         */
        TemplateScratchType: string;
        /**
         * 资源场景状态。
         * @example `GENERATE_COMPLETE`
         */
        Status: string;
        /**
         * 资源场景生成失败的原因。
         * > 仅当Status为GENERATE_FAILED时返回该参数。
         * @example `Resource ALIYUN::ECS::VPC vpc-m5eauuq80anx59v28**** could not be found for template scratch.`
         */
        StatusReason: string;
        /**
         * 资源场景生成失败的状态码。
         * > 仅当Status为GENERATE_FAILED时返回该参数。
         * @example `InvalidZoneId`
         */
        FailedCode: string;
        /**
         * 资源场景配置参数。
         */
        PreferenceParameters: {
            /**
             * 参数名称。
             * @example `DeletionPolicy`
             */
            ParameterKey: string;
            /**
             * 参数值。
             * @example `Retain`
             */
            ParameterValue: string;
        }[];
        /**
         * 资源场景说明。
         * @example `纳管VPC资源。`
         */
        Description: string;
        /**
         * 源资源。
         */
        SourceResources: {
            /**
             * 资源ID。
             * @example `vpc-m5eauuq80anx59v28****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::VPC`
             */
            ResourceType: string;
        }[];
        /**
         * 源标签。
         */
        SourceTag: {
            /**
             * 源标签。
             * @example `{"a": "b"}`
             */
            ResourceTags: any;
            /**
             * 资源类型筛选器。
             */
            ResourceTypeFilter: string[];
        };
        /**
         * 源资源组。
         */
        SourceResourceGroup: {
            /**
             * 源资源组ID。
             * @example `rg-acfmzawhxxc****`
             */
            ResourceGroupId: string;
            /**
             * 资源类型筛选器。
             */
            ResourceTypeFilter: string[];
        };
        /**
         * 逻辑ID生成策略，取值：
         * - LongTypePrefixAndIndexSuffix（默认值）：长类型前缀+索引后缀。
         * - LongTypePrefixAndHashSuffix：长类型前缀+哈希后缀。
         * - ShortTypePrefixAndHashSuffix：短类型前缀+哈希后缀。
         * @example `LongTypePrefixAndIndexSuffix`
         */
        LogicalIdStrategy: string;
        /**
         * 资源场景的标签。
         */
        Tags: {
            /**
             * 资源场景的标签键。
             * @example `usage1`
             */
            Key: string;
            /**
             * 资源场景的标签值。
             * @example `test1`
             */
            Value: string;
        }[];
        /**
         * 资源场景创建时间。
         * 按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2021-12-07T08:06:44`
         */
        CreateTime: string;
        /**
         * 资源场景更新时间。
         * 按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2021-12-07T08:06:44`
         */
        UpdateTime: string;
        /**
         * 资源组ID。
         * @example `rg-acfm4nxcvht4pmi`
         */
        ResourceGroupId: string;
    }[];
}
