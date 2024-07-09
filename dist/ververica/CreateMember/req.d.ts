export interface CreateMemberRequest {
    /**
     * 工作空间ID。
     * @example `ca84d539167d4d`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `u-gs3rgla9-default`
     */
    "namespace": string;
    /**
     * 成员账号和权限对应关系。
     */
    "body"?: any;
}
