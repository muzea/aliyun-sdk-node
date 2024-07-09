export interface DeleteMemberRequest {
    /**
     * 工作空间ID。
     * @example `710d6a64d8c34d`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 成员UID。
     * @example `user:223769`
     */
    "member": string;
}
