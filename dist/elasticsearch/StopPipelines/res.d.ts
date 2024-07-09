export interface StopPipelinesResponse {
    /**
     * 返回结果：
     * - true：停止运行管道成功
     * - false：停止运行管道失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
