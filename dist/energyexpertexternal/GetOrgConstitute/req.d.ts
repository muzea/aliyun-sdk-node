export interface GetOrgConstituteRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 企业code。
         * @example `Z-20240115-2`
         */
        code: string;
        /**
         * 年份。
         * @example `2024`
         */
        year: number;
        /**
         * 模块编码。
         * @example `carbonInventory.check.scope_1_direct_ghg_emissions
        `
         */
        moduleCode: string;
        /**
         * 模块类型。
         * @example `3`
         */
        moduleType: number;
    };
}
