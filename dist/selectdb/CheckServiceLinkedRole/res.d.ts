export interface CheckServiceLinkedRoleResponse {
    /**
     * 请求ID。
     * @example `1F455133-981E-5AD0-80EB-26EA1EF3C65F`
     */
    RequestId: string;
    /**
     * 是否已创建服务关联角色。
     * @example `False`
     */
    HasServiceLinkedRole: boolean;
}
