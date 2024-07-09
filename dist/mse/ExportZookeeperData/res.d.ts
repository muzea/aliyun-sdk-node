export interface ExportZookeeperDataResponse {
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 请求ID。
     * @example `25EA0A83-9007-4E87-808C-637BE1A****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 实例ID。
         * @example `mse-cn-st21ri2****`
         */
        InstanceId: string;
        /**
         * 导出类型，取值：
         * - transactionLog 事务日志
         * - snapshot 快照文件
         * @example `snapshot`
         */
        ExportType: string;
        /**
         * 任务内容。
         */
        ContentMap: any;
        /**
         * 扩展信息。
         * @example `{}`
         */
        Extend: string;
        /**
         * 任务状态，取值：
         * -  CREATE 创建中
         *  -   RUNNING 执行中
         *  -   FINISH 已完成
         *   -  FAILED 失败
         *  -   EXPIRE 已过期
         * @example `FINISH`
         */
        Status: string;
        /**
         * 关联的底层taskId，仅作为失败时的排查使用。
         * @example `10`
         */
        KubeoneTaskIds: string;
        /**
         * 任务ID。
         * @example `1`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1631001140913`
         */
        CreateTime: number;
        /**
         * 最后更新时间。
         * @example `1632979237663`
         */
        UpdateTime: number;
    };
}
