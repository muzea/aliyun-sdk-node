export interface QueryWorksByWorkspaceRequest {
    /**
     * 工作空间ID。
     * @example `89713491-cb4f-4579-b889-e82c35f1****`
     */
    "WorkspaceId": string;
    /**
     * 作品类型。取值范围：
     * - DATAPRODUCT：数据门户
     * - PAGE：仪表板
     * - FULLPAGE：全屏仪表板
     * - REPORT：电子表格
     * @example `PAGE`
     */
    "WorksType"?: string;
    /**
     * 作品状态。取值范围：
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
     * @example `0`
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
