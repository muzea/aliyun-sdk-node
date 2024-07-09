export interface QuerySubsIdResponse {
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E7F99446-8191-43C0-99B5-F58A6AEAD779`
     */
    RequestId: string;
    /**
     * 绑定关系ID。
     * @example `11111111****`
     */
    SubsId: string;
}
