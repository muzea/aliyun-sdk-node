export interface ListInstancePatchStatesResponse {
    /**
     * 翻页标记Token。
     * @example `-`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `9A47C086-E64D-52EE-8B2C-EFD23877C55E`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 实例补丁信息。
     */
    InstancePatchStates: {
        /**
         * 未安装补丁数量。
         * @example `0`
         */
        MissingCount: string;
        /**
         * 操作结束时间。
         * @example `2021-09-10T11:42:22Z`
         */
        OperationEndTime: string;
        /**
         * 用户信息。
         * @example `“”`
         */
        OwnerInformation: string;
        /**
         * 不符合基线的补丁数量。
         * @example `0`
         */
        InstalledOtherCount: string;
        /**
         * ECS实例ID。
         * @example `i-bp1jaxa2bs4bps7*****`
         */
        InstanceId: string;
        /**
         * 操作类型。
         * @example `scan`
         */
        OperationType: string;
        /**
         * 操作开始时间。
         * @example `2021-09-10T11:42:22Z`
         */
        OperationStartTime: string;
        /**
         * 安装失败的补丁数量。
         * @example `0`
         */
        FailedCount: string;
        /**
         * 补丁基线ID。
         * @example `pb-f9393021b7a049e1b34e`
         */
        BaselineId: string;
        /**
         * 安装待重启的补丁数量。
         * @example `0`
         */
        InstalledPendingRebootCount: string;
        /**
         * 已安装用户拒绝的补丁数量。
         * @example `0`
         */
        InstalledRejectedCount: string;
        /**
         * 补丁组。
         * @example `null`
         */
        PatchGroup: string;
        /**
         * 已安装的补丁数量。
         * @example `0`
         */
        InstalledCount: string;
    }[];
}
