export interface ListProblemDetailOperationsResponse {
    /**
     * requestId
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * 总数
     * @example `210`
     */
    totalCount: number;
    /**
     * 页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 行
     * @example `10`
     */
    pageSize: number;
    /**
     * data
     */
    data: {
        /**
         * 动态标题
         * @example `动态标题`
         */
        title: string;
        /**
         * 描述
         * @example `描述`
         */
        description: string;
        /**
         * 服务
         * @example `服务A`
         */
        relatedServiceName: string;
        /**
         * 创建时间
         * @example `2021-01-23 00:00:00`
         */
        createTime: string;
        /**
         * 备注
         * @example `备注`
         */
        remark: string;
        /**
         * 升级 PROBLEM_UPGRADE 撤销 PROBLEM_REVOKE 恢复 PROBLEM_RESTORE 复盘 PROBLEM_IN_REVIEW 完结 PROBLEM_REOPENED 取消 PROBLEM_CANCEL 更新故障通告 PROBLEM_UPDATE_NOTIFY 添加故障小计 PROBLEM_ADD_SUBTOTAL 更新故障 PROBLEM_UPDATE
         * @example `PROBLEM_CANCEL`
         */
        action: string;
        /**
         * 快照数据
         * @example `{“userName”:"小明"}`
         */
        snapshotData: string;
    }[];
}
