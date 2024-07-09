export interface GetUAIDApplyTokenSignResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `-`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `68A40250-50CD-034C-B728-0BD******177`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 外部流水号。
         * @example `b8b5b3a*******0b9893484fdf412c99`
         */
        OutId: string;
        /**
         * 签名值
         * @example `D2E204D74EEB373E468632********23F592C4C9`
         */
        Sign: string;
        /**
         * 用户所处的运营商。取值：
         * - **CM**：中国移动。
         * - **CU**：中国联通。
         * - **CT**：中国电信。
         * @example `CM`
         */
        Carrier: string;
    };
    /**
     * 请求状态码。取值：
     * - **OK**：请求成功。
     * @example `OK`
     */
    Code: string;
}
