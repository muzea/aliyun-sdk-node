export interface AddUserGroupMemberResponse {
    /**
     * 请求 ID。
     * @example `B6141A5A-A9EF-5F16-BF34-EFB9C1CCE4F3`
     */
    RequestId: string;
    /**
     * 返回添加用户组成员的结果。取值范围：
     * - true：添加成功
     * - false：添加失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
