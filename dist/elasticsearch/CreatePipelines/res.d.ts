export interface CreatePipelinesResponse {
    /**
     * 管道是否创建成功：
     * - true：创建成功
     * - false：创建失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
