export interface DataSetBloodResponse {
    /**
     * 请求ID。
     * @example `46e537a5****,3dadsu****`
     */
    RequestId: string;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 作品数组。
     */
    Result: {
        /**
         * 作品类型：
         * - REPORT:电子表格
         * - dashboardOfflineQuery：自助取数
         * - DASHBOARD:仪表板
         * - ANALYSIS:即席分析
         * - SCREEN:数据大屏
         * - PAGE:老仪表板
         * @example `PAGE`
         */
        WorksType: string;
        /**
         * 作品id。
         * @example `ccd3428c-****-****-a608-26bae29dffee`
         */
        WorksId: string;
    }[];
}
