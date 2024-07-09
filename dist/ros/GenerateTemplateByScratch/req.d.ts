export interface GenerateTemplateByScratchRequest {
    /**
     * 资源场景所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源场景ID。
     * 关于如何获取资源场景ID，请参见[ListTemplateScratches](~~363050~~)。
     * @example `ts-aa9c62feab844a6b****`
     */
    "TemplateScratchId": string;
    /**
     * 新节点所属的地域ID。
     * @example `cn-hangzhou`
     */
    "ProvisionRegionId"?: string;
    /**
     * 生成模板类型，支持生成ROS和Terraform类型的模板，默认为ROS。
     * @example `ROS`
     */
    "TemplateType"?: string;
}
