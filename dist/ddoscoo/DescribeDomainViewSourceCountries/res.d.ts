export interface DescribeDomainViewSourceCountriesResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 网站业务的请求来源国家信息。
     */
    SourceCountrys: {
        /**
         * 请求数量。
         * @example `3390671`
         */
        Count: number;
        /**
         * 国家简称。详见[中国和海外地区代码](~~167926~~)中的**海外地区代码**说明。例如，**cn**表示中国，**us**表示美国。
         * @example `cn`
         */
        CountryId: string;
    }[];
}
