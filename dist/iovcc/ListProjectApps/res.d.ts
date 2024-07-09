export interface ListProjectAppsResponse {
    /**
     * 请求ID。
     * @example `A15971B1-DC63-4AEC-A8B1-85CB8CD78227`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Result: {
        /**
         * 应用列表
         */
        ProjectApps: {
            /**
             * 应用状态。
             * 0表示正常，1表示删除。
             * @example `0`
             */
            Status: number;
            /**
             * 所属项目ID
             * @example `11`
             */
            ProjectId: string;
            /**
             * 所属用户ID
             * @example `1768723179523459`
             */
            UserId: string;
            /**
             * 修改时间
             * @example `1524736376000`
             */
            GmtModified: number;
            /**
             * 应用包名
             * @example `com.app1`
             */
            AppPkgName: string;
            /**
             * 应用名称
             * @example `app1`
             */
            AppName: string;
            /**
             * 应用AppSecret。
             * 默认不完全显示，只显示头尾2个字符。
             * @example `Q******F`
             */
            AppSecret: string;
            /**
             * 应用AppKey
             * @example `mPp7O4LW`
             */
            AppKey: string;
            /**
             * 应用AppId
             * @example `AX4R4JWQ`
             */
            AppId: string;
            /**
             * 系统类型，1-Android。
             * @example `1`
             */
            OsType: number;
            /**
             * 创建时间
             * @example `1524736376000`
             */
            GmtCreate: number;
            /**
             * 主键ID
             * @example `78`
             */
            Id: number;
        }[];
        /**
         * 总页数
         * @example `1`
         */
        TotalPage: number;
        /**
         * 总记录条数
         * @example `1`
         */
        TotalCount: number;
    };
}
