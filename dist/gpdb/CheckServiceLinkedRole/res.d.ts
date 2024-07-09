export interface CheckServiceLinkedRoleResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 是否已经创建服务关联角色（SLR）。
     * @example `true`
     */
    HasServiceLinkedRole: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
