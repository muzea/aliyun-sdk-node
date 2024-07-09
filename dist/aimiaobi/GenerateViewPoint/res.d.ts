export interface GenerateViewPointResponse {
    /**
     * 请求唯一标识
     * @example `94512A33-8EC1-5452-A793-5C91F18ED2F0`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 错误说明
     * @example `错误`
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
         * 生成的视角
         * @example `视角`
         */
        Point: string;
    }[];
}
