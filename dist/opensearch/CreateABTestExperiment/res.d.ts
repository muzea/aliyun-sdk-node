export interface CreateABTestExperimentResponse {
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
         * @example `0`
         */
        created: number;
        /**
         * 实验参数
         * @example `{"firstFormulaName": "default"}`
         */
        params: any;
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
         * @example `test3`
         */
        name: string;
        /**
         * 最后修改时间
         * @example `1589017861`
         */
        updated: number;
        /**
         * 实验ID
         * @example `12889`
         */
        id: string;
    };
}
