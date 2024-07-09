export interface QueryShareListResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `DC4E1E63-B337-44F8-8C22-6F00DF67E2C3`
     */
    RequestId: string;
    /**
     * 返回作品被分享给的对象列表。
     */
    Result: {
        /**
         * 分享配置ID。
         * @example `0ab9659e-29cf-47d7-a364-3a91553b****`
         */
        ShareId: string;
        /**
         * 分享目标的ID，可能是在Quick BI的用户ID，可能是用户组ID。
         * - 当ShareToType=2（所有组织内的成员）的时候，ShareToId为组织ID。
         * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
         */
        ShareToId: string;
        /**
         * 分享权限。取值范围：
         * - 1：仅查看
         * - 3：查看和导出
         * @example `3`
         */
        AuthPoint: number;
        /**
         * 授权有效时间的毫秒级时间戳。
         * @example `1640102400000`
         */
        ExpireDate: number;
        /**
         * 分享类型。取值范围：
         * - 0：用户
         * - 1：用户组
         * - 2：组织
         * - 3：空间
         * @example `0`
         */
        ShareToType: number;
        /**
         * 作品ID。
         * @example `6b407e50-e774-406b-9956-da2425c2****`
         */
        ReportId: string;
        /**
         * 分享对象的名称。
         * @example `小张`
         */
        ShareToName: string;
        /**
         * 被分享作品的类型。取值范围：
         * - product：数据门户
         * - dashboard：仪表板
         * - worksheet：电子表格
         * - dashboardOfflineQuery：自助取数
         * - ANALYSIS：即席分析
         * - DATAFORM：数据填报
         * - SCREEN：数据大屏
         * @example `product`
         */
        ShareType: string;
    }[];
}
