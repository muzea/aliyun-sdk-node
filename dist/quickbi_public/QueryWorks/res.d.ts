export interface QueryWorksResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 作品详情信息。
     */
    Result: {
        /**
         * 作品ID。
         * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
         */
        WorksId: string;
        /**
         * 查询作品的类型，填空为查询所有类型。取值范围：
         * - DATAPRODUCT：数据门户
         * - PAGE：仪表板
         * - FULLPAGE：全屏仪表板
         * - REPORT：电子表格
         * - dashboardOfflineQuery：自助取数
         * @example `PAGE`
         */
        WorkType: string;
        /**
         * 作品名称。
         * @example `测试报表`
         */
        WorkName: string;
        /**
         * 作品所属工作空间的ID。
         * @example `87c6b145-090c-43e1-9426-8f93be23****`
         */
        WorkspaceId: string;
        /**
         * 作品所属工作空间名称。
         * @example `测试空间`
         */
        WorkspaceName: string;
        /**
         * 作品所属目录。
         */
        Directory: {
            /**
             * 所属目录ID。
             * @example `83d37ba6-d909-48a2-a517-f4d05c3a****`
             */
            Id: string;
            /**
             * 目录名称。
             * @example `测试目录`
             */
            Name: string;
            /**
             * 所属目录ID的层级结构，以『/』分隔。
             * @example `83d37ba6-d909-48a2-a517-f4d05c3a****`
             */
            PathId: string;
            /**
             * 所属目录名称的层级结构，以『/』分隔。
             * @example `测试目录`
             */
            PathName: string;
        };
        /**
         * 作品协同授权的安全策略。取值：
         * - 0：私密
         * - 12：授权指定成员
         * - 1或11：授权所有空间成员
         * >- 若您使用旧版权限，则返回值为1。
         * >- 若您使用新版权限，则返回值为11。
         * @example `0`
         */
        SecurityLevel: string;
        /**
         * 第三方嵌入状态。取值范围：
         * - 0：暂未开通嵌入
         * - 1：已开通嵌入
         * @example `0`
         */
        Auth3rdFlag: number;
        /**
         * 作品备注。
         * @example `备注`
         */
        Description: string;
        /**
         * 作品所有者在Quick BI的UserID。
         * @example `9187a612aa474e2a8ac1414d5529****`
         */
        OwnerId: string;
        /**
         * 作品所有者的阿里云账户名。
         * @example `张三`
         */
        OwnerName: string;
        /**
         * 作品修改者的阿里云账户名。
         * @example `张三`
         */
        ModifyName: string;
        /**
         * 作品创建的毫秒级时间戳。
         * @example `1496651577000`
         */
        GmtCreate: string;
        /**
         * 作品修改的毫秒级时间戳。
         * @example `1496651577000`
         */
        GmtModify: string;
        /**
         * 报表状态。取值范围：
         * - 0：未发布
         * - 1：已发布
         * - 2：已修改未发布
         * - 3：已下线
         * @example `0`
         */
        Status: number;
        /**
         * 是否公开
         * @example `true`
         */
        PublicFlag: boolean;
        /**
         * 报表公开的截止日期
         * @example `1721366354000`
         */
        PublicInvalidTime: number;
    };
}
