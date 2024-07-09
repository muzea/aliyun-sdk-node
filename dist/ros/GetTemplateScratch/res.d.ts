export interface GetTemplateScratchResponse {
    /**
     * 请求ID。
     * @example `A8E0EF98-6FBD-5656-8298-FC8194F0F7B7`
     */
    RequestId: string;
    /**
     * 资源场景。
     */
    TemplateScratch: {
        /**
         * 资源场景ID。
         * @example `ts-7f7a704cf71c49a6****`
         */
        TemplateScratchId: string;
        /**
         * 资源场景类型，取值：
         * - ResourceImport：资源纳管。
         * - ArchitectureReplication：资源复制。
         * @example `ArchitectureReplication`
         */
        TemplateScratchType: string;
        /**
         * 资源场景状态，取值：
         * - GENERATE\_IN_PROGRESS：生成中。
         * - GENERATE_COMPLETE：生成完成。
         * - GENERATE_FAILED：生成失败。
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
         * 资源场景数据。
         * @example `参见返回示例`
         */
        TemplateScratchData: any;
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
         * @example `复制VPC资源。`
         */
        Description: string;
        /**
         * 源资源。
         */
        SourceResources: {
            /**
             * 资源ID。
             * @example `vpc-m5e7cv7e9mz69sszb****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::VPC`
             */
            ResourceType: string;
            /**
             * 附属资源类型筛选器。
             */
            RelatedResourceTypeFilter: string[];
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
         * 资源场景创建时间。
         * 按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2021-12-22T01:49:22`
         */
        CreateTime: string;
        /**
         * 资源场景更新时间。
         * 按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2021-12-22T01:49:23`
         */
        UpdateTime: string;
        /**
         * 资源场景关联的资源栈列表。
         */
        Stacks: {
            /**
             * 资源栈ID。
             * @example `3708bf6a-3a67-44d4-9eb1-c56704b9****`
             */
            StackId: string;
            /**
             * 资源栈所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 资源栈用途，取值：
             * - ResourceImport：资源纳管。
             * - ArchitectureReplication：资源复制。
             * @example `ArchitectureReplication`
             */
            UsageType: string;
        }[];
        /**
         * 资源栈预置信息。
         */
        StackProvision: {
            /**
             * 是否支持通过[CreateStack](~~132086~~)创建资源栈以进行资源复制，取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            Creatable: boolean;
            /**
             * 是否支持通过[CreateChangeSet](~~131051~~)创建更改集以进行资源纳管，取值：
             * - true：支持。
             * - false：不支持。
             * @example `false`
             */
            Importable: boolean;
        };
        /**
         * 资源组ID。
         * @example `rg-acfmzmhzoaad5oq`
         */
        ResourceGroupId: string;
    };
}
