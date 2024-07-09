export interface RegisterDefaultPatchBaselineResponse {
    /**
     * 请求ID。
     * @example `D6850689-348D-59FC-AE13-BB0EDB7C4BE8`
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
         * @example `RegisterPatchBaseline`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-07T03:42:56Z`
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
         * @example `2021-09-07T03:42:56Z`
         */
        CreatedDate: string;
        /**
         * 补丁基线名称。
         * @example `MyPatchBaseline`
         */
        Name: string;
        /**
         * 接受规则。
         * @example `{"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}`
         */
        ApprovalRules: string;
        /**
         * 补丁基线ID。
         * @example `pb-445340b5c6504a85a300`
         */
        Id: string;
        /**
         * 补丁基线共享类型。
         * @example `Private`
         */
        ShareType: string;
        /**
         * 资源组ID。
         * @example `rg-acfm4dpaq2yox6q`
         */
        ResourceGroupId: string;
    };
}
