export interface ListCollectionsResponse {
    /**
     * 收藏记录的主键 ID。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `162A632E-0A88-51CF-98F8-94FDEE82DB7D`
     */
    RequestId: string;
    /**
     * 用户收藏的报表列表详情。
     */
    Result: {
        /**
         * 工作空间ID。
         * @example `9337d121-a78f-4c1b-a8bc-f81de117****`
         */
        WorkspaceId: string;
        /**
         * 作品类型。取值范围：
         * - DATAPRODUCT：数据门户
         * - PAGE：仪表板
         * - REPORT：电子表格
         * - dataForm：数据填报
         * - dashboardOfflineQuery：自助取数
         * @example `dashboardOfflineQuery`
         */
        WorksType: string;
        /**
         * 收藏记录的主键 ID。
         * @example `12373`
         */
        FavoriteId: number;
        /**
         * 作品的ID。
         * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
         */
        WorksId: string;
        /**
         * 作品的名称。
         * @example `奇异博士`
         */
        WorksName: string;
        /**
         * 工作空间名称。
         * @example `测试工作空间`
         */
        WorkspaceName: string;
        /**
         * 作品所有者的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
         * @example `fe67f61a35a94b7da1a34ba174a7****`
         */
        OwnerId: string;
    }[];
}
