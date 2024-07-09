export interface GetPermissionResponse {
    /**
     * 请求ID。
     * @example `2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA`
     */
    RequestId: string;
    /**
     * 共享权限信息。
     */
    Permission: {
        /**
         * 共享权限名称。
         * @example `AliyunRSDefaultPermissionVSwitch`
         */
        PermissionName: string;
        /**
         * 共享权限版本。
         * @example `v1`
         */
        PermissionVersion: string;
        /**
         * 共享权限策略定义。
         * @example `{"Effect":"Allow","Action":["vpc:DescribeVSwitches","vpc:DescribeVSwitchAttributes"]}`
         */
        Permission: string;
        /**
         * 共享资源类型。
         * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
         * @example `VSwitch`
         */
        ResourceType: string;
        /**
         * 共享权限是否为默认版本。取值：
         * - false：不是默认版本。
         * - true：是默认版本。
         * @example `true`
         */
        DefaultVersion: boolean;
        /**
         * 创建时间。
         * @example `2020-12-07T07:39:01.818Z`
         */
        CreateTime: string;
        /**
         * 更新时间。
         * @example `2020-12-07T07:39:01.818Z`
         */
        UpdateTime: string;
        /**
         * 是否为默认权限。取值：
         * - false：不是默认权限。
         * - true：是默认权限。
         * @example `true`
         */
        DefaultPermission: boolean;
    };
}
