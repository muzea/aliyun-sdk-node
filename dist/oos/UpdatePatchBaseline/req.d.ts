export interface UpdatePatchBaselineRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 补丁基线名称。
     * @example `MyPatchBaseline`
     */
    "Name": string;
    /**
     * 补丁基线描述信息。
     * @example `UpdatePatchBaseline`
     */
    "Description"?: string;
    /**
     * 幂等Token。
     * @example `-`
     */
    "ClientToken"?: string;
    /**
     * 接受规则。
     * @example `{"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}`
     */
    "ApprovalRules"?: string;
    /**
     * 拒绝补丁的列表。
     */
    "RejectedPatches"?: string[];
    /**
     * 拒绝补丁的操作。
     * @example `ALLOW_AS_DEPENDENCY`
     */
    "RejectedPatchesAction"?: string;
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
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
