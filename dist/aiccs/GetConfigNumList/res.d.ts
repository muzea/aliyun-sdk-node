export interface GetConfigNumListResponse {
    /**
     * 请求ID。
     * @example `EE339D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 号码列表。
     */
    Data: string[];
}
