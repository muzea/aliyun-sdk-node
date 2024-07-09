export interface ListPatchBaselinesResponse {
    /**
     * 翻页标记Token。
     * @example `-`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `432996A1-03C0-5C4C-A8E6-66C4110765B8`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 补丁基线列表。
     */
    PatchBaselines: {
        /**
         * 操作系统类型。
         * @example `AliyunLinux`
         */
        OperationSystem: string;
        /**
         * 是否为默认补丁基线。
         * @example `false`
         */
        IsDefault: boolean;
        /**
         * 补丁基线描述信息。
         * @example `ListPatchBaseline`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-08T03:44:34Z`
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
         * @example `2021-09-08T03:41:23Z`
         */
        CreatedDate: string;
        /**
         * 补丁基线名称。
         * @example `MyPatchBaseline`
         */
        Name: string;
        /**
         * 补丁基线ID。
         * @example `pb-c2838b5d89b540e19ee6`
         */
        Id: string;
        /**
         * 补丁基线共享类型。
         * @example `Private`
         */
        ShareType: string;
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
         * 资源组ID。
         * @example `rg-aek256ia6vhsndy`
         */
        ResourceGroupId: string;
    }[];
}
