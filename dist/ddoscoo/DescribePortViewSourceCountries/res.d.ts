export interface DescribePortViewSourceCountriesResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * DDoS高防实例的请求来源国家信息。
     */
    SourceCountrys: {
        /**
         * 请求次数。
         * @example `3390671`
         */
        Count: number;
        /**
         * 请求来源国家的简称。例如，**cn**表示中国，**us**表示美国。
         * > 关于该参数的取值，请参见[地域类型参数取值说明](~~167926~~)。
         * @example `cn`
         */
        CountryId: string;
    }[];
}
