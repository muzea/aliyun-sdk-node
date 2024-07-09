export interface RemoveTagsResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Illegal parameters.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `195390D2-69D0-4D9E-81AA-A7F5BC1B91EB`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Tag: {
        Tags: string[];
    };
}
