export interface ListFlowControlTaskReferenceResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 最近7天物品池平均曝光占比。
         * @example `0.1`
         */
        last7PvPercent: number;
        /**
         * 最近7天场景平均曝光。
         * @example `10`
         */
        last7ScenePv: number;
        /**
         * 最近7天物品池在选中场景平均曝光。
         * @example `10`
         */
        last7TaskPv: number;
        /**
         * 昨天物品池曝光占比。
         * @example `0.1`
         */
        lastPvPercent: number;
        /**
         * 昨天场景总曝光。
         * @example `10`
         */
        lastScenePv: number;
        /**
         * 昨天物品池在选中场景内曝光。
         * @example `10`
         */
        lastTaskPv: number;
        /**
         * 预览ID。
         * @example `421351235918`
         */
        referenceId: string;
    };
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
}
