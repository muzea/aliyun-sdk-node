export interface DescribeABTestExperimentResponse {
    /**
     * 请求ID
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 实验详情
     */
    result: {
        /**
         * 创建时间
         * @example `1588842080`
         */
        created: number;
        /**
         * 实验分桶百分比
         * @example `30`
         */
        traffic: number;
        /**
         * 实验状态
         * - true 生效
         * - false 未生效
         * @example `true`
         */
        online: boolean;
        /**
         * 实验别名
         * @example `test1`
         */
        name: string;
        /**
         * 最后修改时间
         * @example `1588842080`
         */
        updated: number;
        /**
         * 实验ID
         * @example `12888`
         */
        id: string;
        /**
         * 试验参数
         */
        params: {
            /**
             * 粗排策略名
             * @example `default`
             */
            first_formula_name: string;
        };
    };
}
