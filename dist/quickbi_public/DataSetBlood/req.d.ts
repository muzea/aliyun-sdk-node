export interface DataSetBloodRequest {
    /**
     * 数据集ID列表，以英文逗号分割。
     * @example `234235234,234235235,234235235`
     */
    "DataSetIds": string;
    /**
     * 指定报表所属owner ，为userId。
     * @example `dasasgaj342351`
     */
    "UserId"?: string;
    /**
     * 指定报表类型:
     * - REPORT:电子表格
     * - dashboardOfflineQuery：自助取数
     * - DASHBOARD:仪表板
     * - ANALYSIS:即席分析
     * - SCREEN:数据大屏
     * - PAGE:老仪表板
     * @example `PAGE`
     */
    "WorksType"?: string;
}
