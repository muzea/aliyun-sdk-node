export interface DescribeDDosEventAreaResponse {
    /**
     * 本次请求的ID。
     * @example `11710C9F-BC5E-481A-BEC5-C6D8FBFCA827`
     */
    RequestId: string;
    /**
     * 攻击来源地域信息。
     */
    Areas: {
        /**
         * 攻击来源地域的请求包数量。
         * @example `228`
         */
        InPkts: number;
        /**
         * 攻击来源地域的代码。更多信息，请参见[地域代码](~~167926~~)。例如，**110000**表示中国北京市、**us**表示美国。
         * @example `110000`
         */
        Area: string;
    }[];
}
