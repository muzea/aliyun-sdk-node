export interface DescribeCertificatesResponse {
    /**
     * 本次请求的ID。
     * @example `ECF65091-3704-55D5-BC88-EC208B0E238C`
     */
    RequestId: string;
    /**
     * 域名关联的SSL证书信息。
     */
    Certificates: {
        /**
         * 是否是该域名当前所使用的证书。取值：
         * - **true**：表示是。
         * - **false**：表示否。
         * @example `false`
         */
        IsUsing: boolean;
        /**
         * 证书名称。
         * @example `*.aliyundoc.com`
         */
        CertificateName: string;
        /**
         * 证书ID。
         * @example `2329260`
         */
        CertificateId: number;
        /**
         * 证书绑定的域名。
         * @example `*.aliyundoc.com`
         */
        CommonName: string;
        /**
         * 证书的SAN扩展属性列表。
         */
        Sans: string[];
        /**
         * 证书到期时间，格式为Unix时间戳（UTC时间），单位为毫秒。
         * @example `1971273600000`
         */
        EndTime: number;
    }[];
}
