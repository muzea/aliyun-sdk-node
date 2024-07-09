export interface ValuateApplicationResponse {
    /**
     * 错误码
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `A07FFDF2-78FA-1B48-9E38-88E833A93187`
     */
    RequestId: string;
    /**
     * 应用数据
     * @example `123`
     */
    Data: number;
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
}
