export interface GetPermissionRequest {
    /**
     * 共享权限名称。
     * @example `AliyunRSDefaultPermissionVSwitch`
     */
    "PermissionName": string;
    /**
     * 共享权限版本。
     * @example `v1`
     */
    "PermissionVersion"?: string;
}
