export interface ListZnodeChildrenResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BDB6CE0B-9CAF-41B5-9FEA-E08BE8E2****`
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
         * @example `/zookeeper`
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
    }[];
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
