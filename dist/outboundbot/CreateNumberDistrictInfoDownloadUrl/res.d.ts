export interface CreateNumberDistrictInfoDownloadUrlResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `1364f208-982d-4d0c-89aa-d56e22b47589`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 下载地址
     * @example `http://www.xxx.com/xxx`
     */
    FileHttpUrl: string;
}
