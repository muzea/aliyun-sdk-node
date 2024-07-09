export interface DescribePortViewSourceProvincesResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * DDoS高防实例的请求来源中国地域信息。
     */
    SourceProvinces: {
        /**
         * 请求来源中国地域的ID。例如，**110000**表示北京市，**120000**表示天津市。
         * > 关于该参数的取值，请参见[地域类型参数取值说明](~~167926~~)。
         * @example `440000`
         */
        ProvinceId: string;
        /**
         * 相对请求数量。
         * > 该数据不表示真实请求数量的大小，目前您可以使用该数据来计算不同省份请求数量的比例。
         * @example `3390671`
         */
        Count: number;
    }[];
}
