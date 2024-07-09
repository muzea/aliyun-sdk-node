export interface GetTemplateScratchRequest {
    /**
     * 资源场景所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源场景ID。
     * @example `ts-7f7a704cf71c49a6****`
     */
    "TemplateScratchId"?: string;
    /**
     * 数据显示选项，取值：
     * - Sources：仅显示源节点数据，且针对TemplateScratchType为ArchitectureDetection。
     * - Source：仅显示源节点数据，且针对TemplateScratchType不为ArchitectureDetection。
     * - Provisions：仅显示新节点数据，且针对TemplateScratchType不为ArchitectureDetection。
     * - All：显示所有数据。
     * 关于源节点和新节点的更多信息，请参见[概览](~~352074~~)。
     * > 不设置该参数时，默认不显示节点数据。
     * @example `Source`
     */
    "ShowDataOption"?: string;
}
