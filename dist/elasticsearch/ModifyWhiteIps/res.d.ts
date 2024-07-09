export interface ModifyWhiteIpsResponse {
    /**
     * 返回结果：
     * - true：白名单更新成功
     * - false：白名单更新失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1DERFG`
     */
    RequestId: string;
}
