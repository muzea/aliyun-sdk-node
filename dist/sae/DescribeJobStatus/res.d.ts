export interface DescribeJobStatusResponse {
    /**
     * 请求ID。
     * @example `53F15A18-8079-5992-810C-0211A5AE****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0b1639af16575057857241351e****`
     */
    TraceId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `event-b798157b-40a2-4388-b578-71fb897103**-**`
         */
        JobId: string;
        /**
         * 正在运行的实例数。
         * @example `0`
         */
        Active: number;
        /**
         * 运行成功的实例数。
         * @example `3`
         */
        Succeeded: number;
        /**
         * 运行失败的实例数。
         * @example `0`
         */
        Failed: number;
        /**
         * 任务的创建时间。
         * @example `1657522800`
         */
        StartTime: number;
        /**
         * 任务执行的完成时间。
         * @example `1657522839`
         */
        CompletionTime: number;
        /**
         * 附加信息。取值说明如下：
         * - 请求正常，返回**success**。
         * - 请求异常，返回具体异常错误码。
         * @example `success`
         */
        Message: string;
        /**
         * 任务的运行状态。取值说明如下：
         * - **0**：未执行。
         * - **1**：执行成功。
         * - **2**：执行失败。
         * - **3**：正在执行。
         * @example `1`
         */
        State: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
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
     * 查询任务状态是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
