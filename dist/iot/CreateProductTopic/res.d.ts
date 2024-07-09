export interface CreateProductTopicResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用成功时，物联网平台为新建的Topic类生成的Topic ID。
     * > 请妥善保管该信息。在调用与该Topic类相关的接口时，您可能需要提供对应的Topic ID。
     * @example `10000`
     */
    TopicId: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `FCC27691-9151-4B93-9622-9C90F30542EC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
