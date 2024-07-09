export interface ListOperationPlansResponse {
    /**
     * 执行计划列表。
     */
    plans: {
        /**
         * 执行计划ID。
         * @example `P-655c9c127e0e6603ef00****`
         */
        plan_id: string;
        /**
         * 集群ID。
         * @example `c29ced64b3dfe4f33b57ca0aa9f68****`
         */
        cluster_id: string;
        /**
         * 执行计划创建时间。
         * @example `2023-11-21T20:01:22+08:00`
         */
        created: string;
        /**
         * 预期开始执行时间。
         * @example `2023-11-22T15:18:00+08:00`
         */
        start_time: string;
        /**
         * 预期结束执行时间。
         * @example `2023-11-22T18:00:00+08:00`
         */
        end_time: string;
        /**
         * 状态。取值：
         * - scheduled：计划中
         * - canceled：已取消
         * @example `scheduled`
         */
        state: string;
        /**
         * 类型。取值：
         * - cluster_upgrade：集群升级
         * @example `cluster_upgrade`
         */
        type: string;
        /**
         * 执行目标类型。
         * @example `cluster`
         */
        target_type: string;
        /**
         * 执行目标ID。
         * @example `c29ced64b3dfe4f33b57ca0aa9f68****`
         */
        target_id: string;
    }[];
}
