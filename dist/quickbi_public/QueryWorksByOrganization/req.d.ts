export interface QueryWorksByOrganizationRequest {
    /**
     * 查询作品的类型，填空为查询所有类型。取值范围：
     * - DATAPRODUCT：数据门户
     * - PAGE：仪表板
     * - FULLPAGE：全屏仪表板
     * - REPORT：电子表格
     * - dashboardOfflineQuery：自助取数
     * @example `PAGE`
     */
    "WorksType"?: string;
    /**
     * 查询作品的状态。取值范围：
     * - 0：未发布
     * - 1：已发布
     * - 2：已修改未发布
     * - 3：已下线
     * @example `0`
     */
    "Status"?: number;
    /**
     * 第三方嵌入状态。取值范围：
     * - 0：暂未开通嵌入
     * - 1：已开通嵌入
     * @example `1`
     */
    "ThirdPartAuthFlag"?: number;
    /**
     * 页码。
     * - 默认值1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页行数。
     * - 默认值10。
     * @example `10`
     */
    "PageSize"?: number;
}
