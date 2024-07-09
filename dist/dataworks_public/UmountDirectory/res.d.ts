export interface UmountDirectoryResponse {
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0bc5aa2716455247597991794e65bd`
     */
    RequestId: string;
    /**
     * HTTP请求返回的响应状态码，200表示请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 成功移除的数据量，例如：
     * - 0：可能是左侧导航中不存在此数据，所以生效是0条。
     * - 1：成功移除1条。
     * @example `1`
     */
    Data: number;
    /**
     * 调用失败时，返回的错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。200标识查询任务成功。
     * @example `200`
     */
    ErrorCode: string;
}
