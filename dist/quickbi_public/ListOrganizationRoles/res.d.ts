export interface ListOrganizationRolesResponse {
    /**
     * 请求ID。
     * @example `7AAB95D7-2E11-4FE2-94BC-858E4FC0C976`
     */
    RequestId: string;
    /**
     * 返回组织角色列表。
     */
    Result: {
        /**
         * 角色ID。
         * @example `111111111`
         */
        RoleId: number;
        /**
         * 角色名称。
         * @example `组织管理员`
         */
        RoleName: string;
        /**
         * 角色的权限配置列表。
         */
        AuthConfigList: {
            /**
             * 权限类型：
             * - quick_monitor：指标监控
             * - subscription：订阅管理
             * - offline_download：自助取数
             * - resource_package：资源包管理
             * - organization_ask：组织识别码（AK/SK）
             * - developer_openapi：开放API
             * - data_service：数据服务
             * - admin_authorize3rd：嵌入分析
             * - component_manage：自定义组件
             * - template_open：自定义模版
             * - custom_driver：自定义驱动（仅独立部署支持）
             * - open_platform_custom_plugin：自定义插件（仅独立部署支持）
             * - enterprise_safety：企业安全
             * @example `enterprise_safety`
             */
            AuthKey: string;
        }[];
        /**
         * 是否是预置角色。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        IsSystemRole: boolean;
    }[];
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
