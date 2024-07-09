export interface DescribeVaultsRequest {
    /**
     * 备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 备份仓库所属的地域ID。
     * @example `cn-shanghai`
     */
    "VaultRegionId"?: string;
    /**
     * 备份仓库状态。
     * - **UNKNOWN**：未知
     * - **INITIALIZING**：初始化中
     * - **CREATED**：已创建
     * - **ERROR**：错误
     * @example `CREATED`
     */
    "Status"?: string;
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 备份仓库类型。取值
     * - **STANDARD**：表示普通仓库，可用于ECS文件备份、OSS备份、NAS备份等。
     * - **OTS_BACKUP**：表示TableStore仓库，仅可用于TableStore备份，且TableStore需要使用该类型的仓库。
     * @example `STANDARD`
     */
    "VaultType"?: string;
    /**
     * 标签信息。最大支持20个标签。
     * @example `6a745bceffb042959b3b5206d6f12ad1`
     */
    "Tag"?: {
        /**
         * 标签的Key值。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签的Value值。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-*********************`
     */
    "ResourceGroupId"?: string;
}
