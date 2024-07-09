export interface ResumeVideoFileResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据详情。
     */
    Data: any;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
