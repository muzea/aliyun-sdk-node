export interface ResetFabricOrganizationUserPasswordRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w****`
     */
    "OrganizationId": string;
    /**
     * 用户名
     * @example `username`
     */
    "Username": string;
    /**
     * 密码
     * @example `pwd`
     */
    "Password": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
}
