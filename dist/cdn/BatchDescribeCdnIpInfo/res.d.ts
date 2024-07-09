export interface BatchDescribeCdnIpInfoResponse {
    /**
     * 请求ID。
     * @example `55ADD936-763F-5E1A-BF54-2EA3F6E94A52`
     */
    RequestId: string;
    /**
     * IP地址返回结果。
     */
    IpInfoList: {
        /**
         * IP地址。
         * @example `111.XXX.XXX.230`
         */
        IpAddress: string;
        /**
         * 所属运营商名称。
         * @example `移动`
         */
        IspName: string;
        /**
         * 所属国家。
         * @example `中国`
         */
        Country: string;
        /**
         * 所属省。
         * @example `北京市`
         */
        Province: string;
        /**
         * 所属市。
         * @example `北京市`
         */
        City: string;
        /**
         * 是否属于阿里云CDN节点。
         * - **true**：属于。
         * - **false**：不属于。
         * @example `true`
         */
        CdnIp: string;
    }[];
}
