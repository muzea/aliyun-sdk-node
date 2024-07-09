export interface DescribePortViewSourceIspsResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * DDoS高防实例的请求来源运营商信息。
     */
    Isps: {
        /**
         * 相对请求数量。
         * > 该数据不表示真实请求数量的大小，目前您可以使用该数据来计算不同运营商请求数量的比例。
         * @example `3390671`
         */
        Count: number;
        /**
         * 运营商ID。详见返回参数表下的运营商代码说明，运营商ID对应表中的代码。
         * @example `100017`
         */
        IspId: string;
    }[];
}
