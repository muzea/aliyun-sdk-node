export interface DeleteUserGroupMembersResponse {
    /**
     * 请求ID。
     * @example `ABBAD906-3925-5D18-B23D-714053AB0AA2`
     */
    RequestId: string;
    /**
     * 返回接口执行结果。取值范围：
     * - true：执行成功
     * - false：执行失败
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
