export interface GetTemplateSummaryResponse {
    /**
     * 模板中用到的所有资源类型。
     */
    ResourceTypes: string[];
    /**
     * 资源栈模板的描述信息。
     * @example `No description`
     */
    Description: string;
    /**
     * 参数声明的列表。
     */
    Parameters: any[];
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
    /**
     * 模板版本。
     * @example `2015-09-01`
     */
    Version: string;
    /**
     * 模板中定义的元数据。
     * @example `{"key": "value"}`
     */
    Metadata: any;
    /**
     * 资源标识符摘要的列表。
     * 摘要描述了导入操作的目标资源以及在导入过程中用于标识目标资源的属性。 例如：VpcId是ALIYUN::ECS::VPC资源的标识符属性。
     */
    ResourceIdentifierSummaries: {
        /**
         * 资源类型。
         * > 该资源类型支持资源导入。
         * @example `ALIYUN::ECS::VPC`
         */
        ResourceType: string;
        /**
         * 模板中类型为ResourceType的所有资源的逻辑ID。
         */
        LogicalResourceIds: string[];
        /**
         * 资源属性。用来标识目标资源。 例如：VpcId是ALIYUN::ECS::VPC资源的标识符属性。
         */
        ResourceIdentifiers: string[];
    }[];
}
