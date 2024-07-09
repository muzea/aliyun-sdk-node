export interface UpdateUserGroupResponse {
    /**
     * 请求ID。
     * @example `4AEF8C5C-D5D2-55D3-BB2F-9D3AA1B6F4FA`
     */
    RequestId: string;
    /**
     * 接口是否执行成功。取值范围：
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
