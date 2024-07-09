export interface CreateDownloadUrlResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 文件url
     * @example `http://www.xxx.com/xxx`
     */
    FileHttpUrl: string;
    /**
     * 请求id
     * @example `EC08CC41-6870-5594-939A-F758F057898F`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
}
