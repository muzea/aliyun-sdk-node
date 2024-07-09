export interface GetGasConstituteRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 企业code
         * @example `C-20240115-3`
         */
        code: string;
        /**
         * 年份
         * @example `2024`
         */
        year: number;
        /**
         * 模块类型
         * @example `3`
         */
        moduleType: number;
        /**
         * 模块编码
         * @example `carbonInventory.check.scope_1_direct_ghg_emissions
        `
         */
        moduleCode: string;
    };
}
