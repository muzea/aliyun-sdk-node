export interface DescribeDomainViewSourceProvincesResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 网站业务的请求来源（中国）省份信息。
     */
    SourceProvinces: {
        /**
         * 省份ID。详见[中国和海外地区代码](~~167926~~)中的**中国地区代码**说明。例如，**110000**表示北京市，**120000**表示天津市。
         * @example `440000`
         */
        ProvinceId: string;
        /**
         * 请求数量。
         * @example `3390671`
         */
        Count: number;
    }[];
}
