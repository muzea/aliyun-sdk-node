export interface UpdateTemplateScratchRequest {
    /**
     * 资源场景所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源场景ID。
     * 当您输入的资源场景ID为不同的场景类型时，可选的请求参数属性也不同。更多信息，请参见下列的请求参数补充说明。
     * > 您可以调用[ListTemplateScratches - 查询资源场景列表](~~610832~~)查看资源场景ID。
     * @example `ts-7f7a704cf71c49a6****`
     */
    "TemplateScratchId": string;
    /**
     * 资源场景说明。
     * @example `复制VPC资源。`
     */
    "Description"?: string;
    /**
     * 源资源。
     * > SourceResources、SourceTag和SourceResourceGroup参数仅需设置其中一个。
     */
    "SourceResources"?: {
        /**
         * 资源ID。
         * @example `vpc-bp1m6fww66xbntjyc****`
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
     * > SourceResources、SourceTag和SourceResourceGroup参数仅需设置其中一个。
     */
    "SourceTag"?: {
        /**
         * 源标签，其中键为标签键，值为标签值。
         * 如果只希望指定标签键，则值需设置为空字符串，例如：{"TagKey": ""}。
         * 最多支持设置10个源标签。如果TemplateScratchType为ArchitectureDetection，最多设置5个源标签。
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
     * > SourceResources、SourceTag和SourceResourceGroup参数仅需设置其中一个。
     */
    "SourceResourceGroup"?: {
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
     * 资源场景配置参数。
     */
    "PreferenceParameters"?: {
        /**
         * 参数名称。
         * 关于取值的更多信息，请参见**请求参数补充说明**。
         * > - PreferenceParameters为可选参数。如果需要指定PreferenceParameters，则ParameterKey和ParameterValue必须同时指定。
         * > - 当TemplateScratchType取值为ResourceImport时，必须指定ParameterKey为DeletionPolicy。
         * @example `DeletionPolicy`
         */
        ParameterKey: string;
        /**
         * 参数值。取值与ParameterKey对应。
         * 关于取值的更多信息，请参见**请求参数补充说明**。
         * > PreferenceParameters为可选参数。如果需要指定PreferenceParameters，则ParameterKey和ParameterValue必须同时指定。
         * @example `Retain`
         */
        ParameterValue: string;
    }[];
    /**
     * 逻辑ID生成策略，取值：
     * - LongTypePrefixAndIndexSuffix：长类型前缀+索引后缀。
     * - LongTypePrefixAndHashSuffix：长类型前缀+哈希后缀。
     * - ShortTypePrefixAndHashSuffix：短类型前缀+哈希后缀。
     * > 默认值为LongTypePrefixAndIndexSuffix。如果TemplateScratchType为ArchitectureDetection，默认值为LongTypePrefixAndHashSuffix。
     * @example `LongTypePrefixAndIndexSuffix`
     */
    "LogicalIdStrategy"?: string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 执行模式，取值：
     * - Async（默认值）：异步执行。
     * - Sync：同步执行。
     * > 如果资源范围较大，同步执行的时间会比较长，推荐同时指定ClientToken，以避免超时问题。
     * @example `Sync`
     */
    "ExecutionMode"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
}
