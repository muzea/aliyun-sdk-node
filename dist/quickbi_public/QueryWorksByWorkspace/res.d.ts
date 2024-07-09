export interface QueryWorksByWorkspaceResponse {
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
     * 返回组织工作空间下所有符合请求条件的作品列表。
     */
    Result: {
        /**
         * 总页码。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 请求接口时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 作品列表详情。
         */
        Data: {
            /**
             * 仪表板，全屏仪表板，电子表格的状态。其他作品类型默认为1，取值范围：
             * - 0：未发布
             * - 1：已发布
             * - 2：已修改未发布
             * - 3：已下线
             * @example `1`
             */
            Status: number;
            /**
             * 作品修改的毫秒级时间戳。
             * @example `1572334870000`
             */
            GmtModify: string;
            /**
             * 第三方嵌入状态。取值范围：
             * - 0：暂未开通嵌入
             * - 1：已开通嵌入
             * @example `1`
             */
            Auth3rdFlag: number;
            /**
             * 作品ID。
             * @example `897ce25e-f993-4abd-af84-d13c5610****`
             */
            WorksId: string;
            /**
             * 作品类型。取值范围：
             * - DATAPRODUCT：数据门户
             * - PAGE：仪表板
             * - FULLPAGE：全屏仪表板
             * - REPORT：电子表格
             * - dashboardOfflineQuery：自助取数
             * - ANALYSIS：即席分析
             * - DATAFORM：表单填报
             * @example `PAGE`
             */
            WorkType: string;
            /**
             * 作品所有者的昵称。
             * @example `李四`
             */
            OwnerName: string;
            /**
             * 作品所属工作空间名称。
             * @example `测试工作空间`
             */
            WorkspaceName: string;
            /**
             * 作品所有者在Quick BI的UserID。
             * @example `作品所属工作空间名称。`
             */
            OwnerId: string;
            /**
             * 作品修改者的昵称。
             * @example `张三`
             */
            ModifyName: string;
            /**
             * 作品所属工作空间的ID。
             * @example `87c6b145-090c-43e1-9426-8f93be23****`
             */
            WorkspaceId: string;
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
             * 作品备注。
             * @example `备注`
             */
            Description: string;
            /**
             * 作品名称。
             * @example `测试报表`
             */
            WorkName: string;
            /**
             * 作品创建的毫秒级时间戳。
             * @example `1496651577000`
             */
            GmtCreate: string;
            /**
             * 作品所属目录。
             */
            Directory: {
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
                /**
                 * 所属目录名称。
                 * @example `所属目录名称。`
                 */
                Name: string;
                /**
                 * 所属目录ID。
                 * @example `83d37ba6-d909-48a2-a517-f4d05c3a****`
                 */
                Id: string;
            };
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
        }[];
    };
}
