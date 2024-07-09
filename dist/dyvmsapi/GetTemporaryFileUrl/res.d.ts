export interface GetTemporaryFileUrlResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7BF47617-7851-48F7-A3A1-2021342A****`
     */
    RequestId: string;
    /**
     * - private String videoFileUrl：播放文件URL
     * - private String videoFile：语音或视频文件
     * - private Long fileExpireTime：文件过期时间，单位毫秒
     */
    Data: any;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
