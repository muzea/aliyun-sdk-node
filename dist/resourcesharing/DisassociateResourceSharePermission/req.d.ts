export interface DisassociateResourceSharePermissionRequest {
    /**
     * 共享单元ID。
     * @example `rs-6GRmdD3X****`
     */
    "ResourceShareId": string;
    /**
     * 共享权限名称。在[权限库](~~465474~~)文档中查看。
     * @example `AliyunRSDefaultPermissionVSwitch`
     */
    "PermissionName": string;
}
