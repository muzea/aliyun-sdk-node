export interface CreateUserGroupResponse {
    /**
     * 请求 ID。
     * @example `36829379-0C38-5BC0-830A-92665BF77D4F`
     */
    RequestId: string;
    /**
     * 返回用户组添加成功后的ID。如果添加失败，返回空字符串“”。
     * @example `f5eeb52e-d9c2-4a8b-80e3-47ab55c2****`
     */
    Result: string;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
