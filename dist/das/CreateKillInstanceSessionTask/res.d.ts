export interface CreateKillInstanceSessionTaskResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 结束会话的任务ID。
     * > PolarDB MySQL版实例调用该API接口，请求参数**NodeId**为空（即未指定节点ID），并且请求参数**KillAllSessions**配置为**true**（即结束全部会话）时，会按照节点数量返回任务ID列表，例如\["f77d535b45405bd462b21caa3ee8\*\*\*\*", "e93ab549abb081eb5dcd5396a29b\*\*\*\*"\]
     * @example `f77d535b45405bd462b21caa3ee8****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
