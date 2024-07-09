export interface AssociateResourceSharePermissionRequest {
    /**
     * 共享单元ID。
     * @example `rs-6GRmdD3X****`
     */
    "ResourceShareId": string;
    /**
     * 共享权限名称。
     * @example `AliyunRSDefaultPermissionVSwitch`
     */
    "PermissionName": string;
    /**
     * 指定的权限是否替换现有权限。取值：
     * - false（默认值）：否，不替换现有权限，适合于将当前权限添加到没有权限的共享单元。由于同一个共享单元中相同资源类型只能具有一个权限，如果共享单元中某资源类型已经有设置权限，同时您将Replace设置为fasle，此时该操作会报错。防止您误操作替换现有权限。
     * - true：是，替换共享单元中相同资源类型的权限。
     * @example `false`
     */
    "Replace"?: boolean;
}
