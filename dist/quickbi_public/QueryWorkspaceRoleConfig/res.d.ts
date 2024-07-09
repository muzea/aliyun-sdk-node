export interface QueryWorkspaceRoleConfigResponse {
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 返回接口查询结果。
     */
    Result: {
        /**
         * 空间角色ID，包括预置角色和自定义角色：
         * - 25：空间管理员（预置角色）
         * - 26：开发者（预置角色）
         * - 27：分析者（预置角色）
         * - 30：阅览者（预置角色）
         * - 自定义角色：自定义角色对应的角色ID
         * @example `25`
         */
        RoleId: number;
        /**
         * 角色名称。
         * @example `空间管理员`
         */
        RoleName: string;
        /**
         * 角色的权限配置列表。
         */
        AuthConfigList: {
            /**
             * 权限类型：
             * - portal_create：数据门户
             * - dashboard_create：仪表板
             * - report_create：电子表格
             * - screen_create：数据大屏
             * - analysis：即席分析
             * - offline_download：自助取数
             * - data_form：数据填报
             * - quick_etl：数据准备
             * - cube：数据集
             * - datasource：数据源
             * @example `portal_create`
             */
            AuthKey: string;
            /**
             * 权限范围。
             */
            ActionAuthKeys: string[];
        }[];
        /**
         * 是否是预置角色。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        IsSystemRole: boolean;
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
