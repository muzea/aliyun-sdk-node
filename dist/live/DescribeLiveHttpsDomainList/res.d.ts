export interface DescribeLiveHttpsDomainListResponse {
    CertInfos: {
        /**
         * 证书信息列表。
         */
        CertInfo: {
            /**
             * 证书主域名。
             * @example `example.org`
             */
            CertCommonName: string;
            /**
             * 证书过期时间。
             * @example `2018-12-26 14:45:09`
             */
            CertExpireTime: string;
            /**
             * 证书名称。
             * @example `test`
             */
            CertName: string;
            /**
             * 证书开始时间。
             * @example `2018-11-26 14:45:09`
             */
            CertStartTime: string;
            /**
             * 证书状态。
             * - **ok**：正常。
             * - **mismatch**：域名与证书不匹配。
             * - **expired**：已过期。
             * - **expire_soon**：即将过期。
             * @example `mismatch`
             */
            CertStatus: string;
            /**
             * 证书类型。
             * - **cas**：云盾证书。
             * - **upload**：自定义上传。
             * @example `cas`
             */
            CertType: string;
            /**
             * 证书更新时间。
             * @example `2019-01-08 18:33:16`
             */
            CertUpdateTime: string;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `F5E8DF64-7175-4186-9B06-F002C0BBD0C5`
     */
    RequestId: string;
    /**
     * 总条数。
     * @example `16`
     */
    TotalCount: number;
}
