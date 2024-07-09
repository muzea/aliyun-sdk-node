export interface QuerySharesToUserListResponse {
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
     * 返回授权给用户的作品列表。
     */
    Result: {
        /**
         * 报表的发布状态。取值范围：
         * - 0：未发布
         * - 1：已发布
         * - 2：已修改未发布
         * - 3：已下线
         * @example `1`
         */
        Status: number;
        /**
         * 第三方嵌入状态。取值范围：
         * - 0：未开通嵌入
         * - 1：已开通嵌入
         * @example `0`
         */
        ThirdPartAuthFlag: number;
        /**
         * 报表ID。
         * @example `97f7f4c1-543a-4069-8e8d-a56cfcd6****`
         */
        WorksId: string;
        /**
         * 创建时间的毫秒级时间戳。
         * @example `1530078690000`
         */
        CreateTime: string;
        /**
         * 作品类型。取值范围：
         * - DATAPRODUCT：数据门户
         * - PAGE：仪表板
         * - FULLPAGE：全屏仪表板
         * - REPORT：电子表格
         * - dashboardOfflineQuery：自助取数
         * @example `DATAFORM`
         */
        WorkType: string;
        /**
         * 作品所有者的阿里云账户名。
         * @example `w****@aliyun.com`
         */
        OwnerName: string;
        /**
         * 报表所在工作空间的名称。
         * @example `专业版回归`
         */
        WorkspaceName: string;
        /**
         * 作品所有者在Quickbi 的UserID。
         * @example `74f5527216d14e9892245320ebf2****`
         */
        OwnerId: string;
        /**
         * 修改者的阿里云账户名。
         * @example `13855265****@163.com`
         */
        ModifyName: string;
        /**
         * 报表所在工作空间的ID。
         * @example `c5f86ad2-ef53-4c51-8720-162ecfdb****`
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
         * @example `测试报表的描述`
         */
        Description: string;
        /**
         * 报表名称。
         * @example `测试报表`
         */
        WorkName: string;
        /**
         * 修改时间的毫秒级时间戳。
         * @example `1530078690000`
         */
        ModifyTime: string;
        /**
         * 作品所在的目录信息。
         */
        Directory: {
            /**
             * 资源所在目录的路径ID。
             * @example `66ffe22b-83be-47fd-b49d-9ca58d29****​/f7f6e22b-83be-47fd-b49d-9ca686a9****`
             */
            PathId: string;
            /**
             * 资源所在目录的路径名称。
             * @example `一级目录/二级目录`
             */
            PathName: string;
            /**
             * 资源名称。
             * @example `图表报表`
             */
            Name: string;
            /**
             * 资源所在的目录ID。
             * @example `f7f6e22b-83be-47fd-b49d-9ca686a9****`
             */
            Id: string;
        };
    }[];
}
