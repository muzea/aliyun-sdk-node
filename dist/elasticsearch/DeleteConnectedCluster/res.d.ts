export interface DeleteConnectedClusterResponse {
    /**
     * 返回结果：
     * - true：移除互通实例成功
     * - false：移除互通实例失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
}
