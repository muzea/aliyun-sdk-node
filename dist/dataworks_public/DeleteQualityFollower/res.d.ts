export interface DeleteQualityFollowerResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 是否成功删除分区表达式的订阅用户，取值如下：
     * - true，删除成功。
     * - false，删除失败，您可以通过报错信息查询原因，处理问题。
     * @example `true`
     */
    Data: boolean;
    /**
     * 删除分区表达式订阅用户失败后的报错信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，用于后续错误排查使用。
     * @example `6d739ef6-098a-47****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
