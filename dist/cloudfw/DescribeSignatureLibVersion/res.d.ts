export interface DescribeSignatureLibVersionResponse {
    /**
     * 总数。
     * @example `132`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `9C50C2A9-4BBB-5504-8ADA-C41A79B8C946`
     */
    RequestId: string;
    /**
     * 版本信息。
     */
    Version: {
        /**
         * 类型。
         * @example `ips`
         */
        Type: string;
        /**
         * 版本。
         * @example `IPS-2307-02`
         */
        Version: string;
    }[];
}
