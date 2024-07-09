export interface DeleteUserGroupResponse {
    /**
     * 请求ID。
     * @example `F2775AB6-DE99-5FA6-86A4-72EA0A8AFEE3`
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
