export interface GetEmissionSummaryRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 企业code
         * @example `C-20240119-1`
         */
        code: string;
        /**
         * 盘查年份
         * @example `2024`
         */
        year: number;
        /**
         * 模块类型
         * @example `3`
         */
        moduleType: number;
        /**
         * 模块代码
         * @example `carbonInventory.check.scope_1_direct_ghg_emissions`
         */
        moduleCode: string;
    };
}
