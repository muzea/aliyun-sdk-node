export interface ReinstallCollectorResponse {
    /**
     * 请求结果：
     * - true：安装成功
     * - false：安装失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
