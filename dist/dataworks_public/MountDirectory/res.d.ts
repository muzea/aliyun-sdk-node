export interface MountDirectoryResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 添加成功的数据量，例如：
     * - 0：可能是左侧导航中已经存在此数据，所以生效是0条。
     * - 1：添加成功1条。
     * @example `1`
     */
    Data: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `C27D4FB9-C59B-5E17-BD6C-1099B9D6A381`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功，取值如下：
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
