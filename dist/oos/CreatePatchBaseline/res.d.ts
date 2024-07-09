export interface CreatePatchBaselineResponse {
    /**
     * 请求ID。
     * @example `A5173FF6-D10D-5E8C-8F71-943C2A3E25C0`
     */
    RequestId: string;
    /**
     * 补丁基线详细信息。
     */
    PatchBaseline: {
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OperationSystem: string;
        /**
         * 补丁基线描述信息。
         * @example `PatchBaseline`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-08T06:25:41Z`
         */
        UpdatedDate: string;
        /**
         * 补丁基线更新者。
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 补丁基线创建者。
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 创建时间。
         * @example `2021-09-08T06:25:41Z`
         */
        CreatedDate: string;
        /**
         * 补丁基线名称。
         * @example `MyPatchBaseline`
         */
        Name: string;
        /**
         * 接受规则。
         * @example `{"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}`
         */
        ApprovalRules: string;
        /**
         * 补丁基线ID。
         * @example `pb-0a0aeda72ed147eb97ea`
         */
        Id: string;
        /**
         * 补丁基线共享类型。
         * @example `Private`
         */
        ShareType: string;
        /**
         * 拒绝补丁的列表。
         */
        RejectedPatches: string[];
        /**
         * 拒绝补丁的操作。
         * @example `"ALLOW_AS_DEPENDENCY"`
         */
        RejectedPatchesAction: string;
        /**
         * 批准补丁的列表。
         */
        ApprovedPatches: string[];
        /**
         * 批准补丁是否包括除安全性之外的更新
         * @example `true`
         */
        ApprovedPatchesEnableNonSecurity: boolean;
        /**
         * 补丁源配置列表。
         */
        Sources: string[];
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。
             * @example `key`
             */
            TagKey: string;
            /**
             * 标签值。
             * @example `value`
             */
            TagValue: string;
        }[];
        /**
         * 资源组ID。
         * @example `rg-acfm3comlufxpva`
         */
        ResourceGroupId: string;
    };
}
