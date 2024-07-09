export interface ListPatchBaselinesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 补丁基线名称。
     * @example `MyPatchBaseline`
     */
    "Name"?: string;
    /**
     * 操作系统类型。支持：
     * - AliyunLinux
     * - Windows
     * - Ubuntu
     * - Centos
     * - Debian
     * - RedhatEnterpriseLinux
     * - Anolis
     * @example `AliyunLinux`
     */
    "OperationSystem"?: string;
    /**
     * 补丁基线共享类型。
     * @example `Private`
     */
    "ShareType"?: string;
    /**
     * 分页大小。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记Token。
     * @example `-`
     */
    "NextToken"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value`
         */
        Value: string;
    }[];
    /**
     * 批准补丁的列表。
     */
    "ApprovedPatches"?: string[];
    /**
     * 批准补丁是否包括除安全性之外的更新
     * @example `true`
     */
    "ApprovedPatchesEnableNonSecurity"?: boolean;
    /**
     * 补丁源配置列表。
     */
    "Sources"?: string[];
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
