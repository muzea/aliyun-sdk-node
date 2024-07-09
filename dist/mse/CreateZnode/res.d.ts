export interface CreateZnodeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DC34E4A3-5F1C-4E40-86EA-02EDF967****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 节点数据。
         * @example `cluster`
         */
        Data: string;
        /**
         * 节点路径。
         * @example `/`
         */
        Path: string;
        /**
         * 节点列表信息，取值如下：
         * - `true`：信息返回成功。
         * - `false`：信息返回失败。
         * @example `true`
         */
        Dir: boolean;
        /**
         * 节点名称。
         * @example `mse-bc1a29b0-160230875****-reg-center-0-1`
         */
        Name: string;
    };
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
