export interface AddTagToFlinkClusterResponse {
    /**
     * Id of the request
     * @example `2FC13182-B9AF-4E6B-BE51-72669B7C****`
     */
    RequestId: string;
    /**
     * 是否成功发起调用：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 是否成功执行业务逻辑：
     * - true：成功。
     * - false：失败。
     * @example `false`
     */
    Data: string;
}
