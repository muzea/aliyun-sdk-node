export interface CreateDynamicTagGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `84AC6F0B-7945-466A-AA44-99BB5A561F86`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 标签匹配规则ID。
     * @example `2534dc0a-e3e5-4ae1-a2fc-75ef166c****`
     */
    Id: string;
}
