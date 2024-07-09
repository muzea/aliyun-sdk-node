export interface DescribeVaultReplicationRegionsResponse {
    /**
     * 返回码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F4EEB401-DD21-588D-AE3B-1E835C7655E1`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    Regions: {
        /**
         * 可用地域列表。
         */
        RegionId: string[];
    };
}
