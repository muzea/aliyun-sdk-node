export interface ResumeElasticsearchTaskResponse {
    /**
     * 返回结果：
     * - true：恢复中断变更成功
     * - false：恢复中断变更失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
