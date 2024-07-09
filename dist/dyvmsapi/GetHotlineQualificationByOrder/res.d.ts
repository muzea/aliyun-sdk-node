export interface GetHotlineQualificationByOrderResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他状态码，请参见[错误码列表](~~112502~~)。
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
     * @example `6086693B-2250-17CE-A41F-06259AB6DB1B`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 资质状态。取值：
         * - **NORMAL**：正常状态。
         * - **OTHER**：不正常状态。
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 400号码的资质ID。
         * @example `10000008748****`
         */
        QualificationId: string;
        /**
         * 申请工单号。
         * @example `15334****`
         */
        OrderId: string;
    };
}
