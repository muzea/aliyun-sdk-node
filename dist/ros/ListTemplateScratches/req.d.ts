export interface ListTemplateScratchesRequest {
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
     * 资源场景类型，取值：
     * - ArchitectureReplication：资源复制。
     * - ArchitectureDetection：资源探查。
     * - ResourceImport：资源纳管。
     * - ResourceMigration：资源迁移。
     * @example `ArchitectureReplication`
     */
    "TemplateScratchType"?: string;
    /**
     * 资源场景状态，取值：
     * - GENERATE\_IN_PROGRESS：生成中。
     * - GENERATE_COMPLETE：生成完成。
     * - GENERATE_FAILED：生成失败。
     * @example `["GENERATE_COMPLETE"]`
     */
    "Status"?: string;
    /**
     * 资源场景的标签。
     */
    "Tags"?: {
        /**
         * 资源场景的标签键。
         * > Tags为可选参数。如果需要指定Tags，则Tags.N.Key必须指定。
         * @example `usage`
         */
        Key: string;
        /**
         * 资源场景的标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源场景的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
}
