export interface ListProvisionedProductPlanApproversResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F****`
     */
    RequestId: string;
    /**
     * 审批人列表。
     */
    Approvers: {
        /**
         * 审批人名称。
         * @example `approver-1`
         */
        PrincipalName: string;
        /**
         * 计划审批人的RAM实体类型。取值：
         * - RamUser：RAM用户。
         * - RamRole：RAM角色。
         * @example `RamUser`
         */
        PrincipalType: string;
    }[];
}
