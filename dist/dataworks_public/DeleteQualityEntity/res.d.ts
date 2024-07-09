export interface DeleteQualityEntityResponse {
    /**
     * HTTP错误码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 调用DeleteQualityEntity接口后，返回的结果详情。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `ecb967ec-c137-48****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
}
