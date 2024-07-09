export interface DescribeTenantZonesReadResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户可用区列表信息。
     */
    TenantZones: {
        /**
         * 是否可选为主库。
         * @example `true`
         */
        IsElectable: boolean;
        /**
         * 是否为主可用区。
         * @example `true`
         */
        IsPrimary: boolean;
        /**
         * 可用区 ID。
         * @example `cn-hangzhou-i`
         */
        Zone: string;
        /**
         * 是否可以设置为只读。
         * @example `true`
         */
        IsReadable: string;
    }[];
}
