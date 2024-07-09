export interface DescribeNodeCidrListResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `5B352E69-E7B1-4EA7-BB8E-29FFE969C791`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.     `
     */
    ErrMessage: string;
    IntranetIPs: {
        /**
         * 内网网段列表。
         */
        IntranetIP: string[];
    };
    InternetIPs: {
        /**
         * 公网网段列表。
         */
        InternetIP: string[];
    };
}
