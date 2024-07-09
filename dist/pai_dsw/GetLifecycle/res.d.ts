export interface GetLifecycleResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FC****`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 操作结果信息。
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * 获取到的实例生命周期详情。
     * @example `[[{"Status":"Creating","GmtCreateTime":"2022-09-19T22:38:00Z","Reason":"","ReasonCode":""}]]`
     */
    Lifecycle: {
        /**
         * 实例所处的状态。可能值：
         * - Creating：创建中。
         * - SaveFailed：实例镜像保存失败。
         * - Stopped：已停止。
         * - Failed：实例创建失败。
         * - ResourceAllocating：资源准备中。
         * - Stopping：停止中。
         * - Updating：更新中。
         * - Saving：保存中。
         * - Starting：启动中。
         * - Running：运行中。
         * - Saved：已保存。
         * - EnvPreparing：环境准备中。
         * - ArrearStopping：欠费停机中。
         * - Arrearge：欠费停机。
         * - Queuing：排队中。
         * - Recovering：恢复中。
         * @example `Starting`
         */
        Status: string;
        /**
         * 发生某种事件的原因对应的代码。
         * @example `“”`
         */
        ReasonCode: string;
        /**
         * 发生某种事件的原因描述。
         * @example `“”`
         */
        ReasonMessage: string;
        /**
         * 该状态创建的时间，即流转到该状态的时间（GMT）。
         * @example `2022-10-21T07:27:44Z`
         */
        GmtCreateTime: string;
    }[][];
    /**
     * 查询得到的Session总数。
     * @example `35`
     */
    TotalCount: number;
}
