export interface GetOutbounNumListResponse {
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 号码列表信息。
     */
    Data: {
        /**
         * 号码组信息。
         */
        NumGroup: {
            /**
             * 号码组类型。取值：
             * - **1**：号码。
             * - **2**：号码组。
             * @example `2`
             */
            Type: number;
            /**
             * 号码组ID。
             * @example `7688****`
             */
            Value: string;
            /**
             * 号码组描述（号码组名称）。
             * @example `Jella`
             */
            Description: string;
        }[];
        /**
         * 主叫号码信息。
         */
        Num: {
            /**
             * 主叫号码类型。取值：
             * - **1**：号码。
             * - **2**：号码组。
             * @example `1`
             */
            Type: number;
            /**
             * 主叫号码。
             * @example `07512234****`
             */
            Value: string;
            /**
             * 主叫号码描述（归属地信息）。
             * @example `浙江省杭州市`
             */
            Description: string;
        }[];
    };
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
