export interface GetTokenResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * Token。
     * @example `eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjY2Vzc190ZXN0In0.eyJqdGkiOiJUTjhfRzFCaEpETTJ3LWVoeGJZZXRnIiwiaWF0IjoxNjIzMzk0NTI3LCJleHAiOjE2MjMzOTYzMjcsIm5iZi****`
     */
    Token: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69DDD`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
