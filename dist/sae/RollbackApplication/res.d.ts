export interface RollbackApplicationResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 变更流程ID。
         * @example `01db03d3-3ee9-48b3-b3d0-dfce2d88****`
         */
        ChangeOrderId: string;
        /**
         * RAM用户发布变更是否需要审批。取值说明如下：
         * - **true**：需审批。
         * - **false**：无需审批。
         * @example `true`
         */
        IsNeedApproval: boolean;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 回退历史版本是否成功。取值说明如下：
     * - **true**：回退成功。
     * - **false**：回退失败。
     * @example `true`
     */
    Success: boolean;
}
