export interface DescribeDcdnHttpsDomainListResponse {
    /**
     * 总条数。
     * @example `16`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `F5E8DF64-7175-4186-9B06-F002C0BBD0C5`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息。
         */
        CertInfo: {
            /**
             * 证书开始时间。
             * @example `2018-11-26 14:45:09`
             */
            CertStartTime: string;
            /**
             * 证书过期时间。
             * @example `2018-12-26 14:45:09`
             */
            CertExpireTime: string;
            /**
             * 证书更新时间。
             * @example `2019-01-08 18:33:16`
             */
            CertUpdateTime: string;
            /**
             * 证书类型。取值：
             * - **cas**：云盾证书。
             * - **upload**：自定义上传。
             * @example `upload`
             */
            CertType: string;
            /**
             * 证书名称。
             * @example `cert`
             */
            CertName: string;
            /**
             * 证书状态。取值：
             * - **ok**：正常。
             * - **mismatch**：域名与证书不匹配。
             * - **expired**：证书已过期。
             * - **expire_soon**：证书即将过期。
             * @example `mismatch`
             */
            CertStatus: string;
            /**
             * 加速域名。
             * @example `*.com`
             */
            DomainName: string;
            /**
             * 证书主域名。
             * @example `*.com`
             */
            CertCommonName: string;
        }[];
    };
}
