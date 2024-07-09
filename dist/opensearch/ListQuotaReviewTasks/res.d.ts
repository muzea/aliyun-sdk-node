export interface ListQuotaReviewTasksResponse {
    /**
     * 总条数
     * @example `500`
     */
    totalCount: number;
    /**
     * 请求id
     * @example `"3351A21F-705B-508C-9450-DA65A681547F"`
     */
    requestId: string;
    /**
     * 审批工单信息参考：[quotareviewtask](~~173609~~)
     * @example `[]`
     */
    result: {
        /**
         * 原存储容量
         * @example `900`
         */
        oldDocSize: number;
        /**
         * 是否待处理
         * @example `false`
         */
        pending: boolean;
        /**
         * 备注
         * @example `null`
         */
        memo: string;
        /**
         * 是否通过审批
         * @example `true`
         */
        approved: boolean;
        /**
         * 原应用规格
         * @example `"opensearch.private.common"`
         */
        oldSpec: string;
        /**
         * 原计算资源
         * @example `500`
         */
        oldComputeResource: number;
        /**
         * 应用类型
         * @example `"standard"`
         */
        appGroupType: string;
        /**
         * 是否可用
         * @example `true`
         */
        available: boolean;
        /**
         * 创建时间
         * @example `"2020-04-08T08:29:45+0000"`
         */
        gmtCreate: string;
        /**
         * 目标存储容量
         * @example `1100`
         */
        newSocSize: number;
        /**
         * 工单ID
         * @example `142`
         */
        id: number;
        /**
         * 应用ID
         * @example `120123456`
         */
        appGroupId: number;
        /**
         * 目标计算资源
         * @example `6000`
         */
        newComputeResource: number;
        /**
         * 应用名称
         * @example `"td_test_os"`
         */
        appGroupName: string;
        /**
         * 更新时间
         * @example `"2020-04-08T08:36:36+0000"`
         */
        gmtModified: string;
        /**
         * 目标应用规格
         * @example `"opensearch.private.common"`
         */
        newSpec: string;
    }[];
}
