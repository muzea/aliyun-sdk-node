export interface GetPermissionRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `123`
     */
    "WorkspaceId": string;
    /**
     * 权限点的名字，region内唯一。权限点介绍，请参见[角色及权限列表](https://pai.console.aliyun.com/?spm=api-workbench.API%20Explorer.0.0.7a862392uO09Se&regionId=cn-shanghai#/workspace/permission)。 如何获取权限点名称，请参见[ListPermissions](~~449132~~)。
     * @example `PaiDLC:GetTensorboard
    `
     */
    "PermissionCode": string;
    /**
     * 访问类型，取值如下。
     * - PUBLIC：当前工作空间所有成员都可以访问。
     * - PRIVATE：只有创建者可以访问。
     * @example `PUBLIC`
     */
    "Accessibility"?: string;
    /**
     * 工作空间权限创建者的阿里云账号UID。
     * @example `17915******4216`
     */
    "Creator"?: string;
    "Resource"?: string;
    "Option"?: string;
}
