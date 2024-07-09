export interface UpdateUserTagValueResponse {
    /**
     * 请求ID。
     * @example `46e5374665ba4b679ee22e2a29270`
     */
    RequestId: string;
    /**
     * 返回修改用户标签的结果。取值范围：
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
