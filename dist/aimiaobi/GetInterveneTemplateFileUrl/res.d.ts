export interface GetInterveneTemplateFileUrlResponse {
    /**
     * 请求唯一标识
     * @example `DA021073-17CE-5CCF-9FEB-93226C766887`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
    /**
     * 错误说明
     * @example `successful`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 模版文件地址
         * @example `http://xxx/xxx.xls`
         */
        FileUrl: string;
    };
}
