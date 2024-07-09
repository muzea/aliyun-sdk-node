export interface QueryReadableResourcesListByUserIdResponse {
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
     * 用户有权限查看的作品列表。
     */
    Result: {
        /**
         * 报表状态。取值范围：
         * - 0：未发布
         * - 1：已发布
         * - 2：已修改未发布
         * - 3：已下线
         * @example `1`
         */
        Status: number;
        /**
         * 第三方嵌入状态。取值范围：
         * - 0：暂未开通嵌入
         * - 1：已开通嵌入
         * @example `1`
         */
        ThirdPartAuthFlag: number;
        /**
         * 作品ID。
         * @example `03366b16-69ce-43c8-b782-56c2f6ec****`
         */
        WorksId: string;
        /**
         * 创建时间的毫秒级时间戳。
         * @example `1611023338000`
         */
        CreateTime: string;
        /**
         * 作品类型。取值范围：
         * - DATAPRODUCT：数据门户
         * - PAGE：仪表板
         * - FULLPAGE：全屏仪表板
         * - REPORT：电子表格
         * @example `PAGE`
         */
        WorkType: string;
        /**
         * 所有者的阿里云账户名。
         * @example `张三`
         */
        OwnerName: string;
        /**
         * 作品所属工作空间名称。
         * @example `测试工作空间`
         */
        WorkspaceName: string;
        /**
         * 作品所有者的Quick BI的UserID。
         * @example `46e5374665ba4b679ee22e2a2927****`
         */
        OwnerId: string;
        /**
         * 修改者的阿里云账户名。
         * @example `李四`
         */
        ModifyName: string;
        /**
         * 作品所属工作空间ID。
         * @example `89713491-cb4f-4579-b889-e82c35f1****`
         */
        WorkspaceId: string;
        /**
         * 作品协同授权的安全策略。取值：
         * - 0：私密
         * - 12：授权指定成员
         * - 1或11：授权所有空间成员
         * >- 若您使用旧版权限，则返回值为1。
         * - 若您使用新版权限，则返回值为11。
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
         * @example `公司地区表`
         */
        WorkName: string;
        /**
         * 修改时间的毫秒级时间戳。
         * @example `1611023338000`
         */
        ModifyTime: string;
        /**
         * 作品所处的目录结构。
         */
        Directory: {
            /**
             * 目录ID的层级结构，以『/』分隔。
             * @example `e4276ea5-b232-4fb1-8f0f-efcee4a2****`
             */
            PathId: string;
            /**
             * 目录名称的层级结构，以『/』分隔。
             * @example `测试目录`
             */
            PathName: string;
            /**
             * 所属目录名称。
             * @example `测试目录`
             */
            Name: string;
            /**
             * 所属目录ID。
             * @example `e4276ea5-b232-4fb1-8f0f-efcee4a2****`
             */
            Id: string;
        };
    }[];
}
