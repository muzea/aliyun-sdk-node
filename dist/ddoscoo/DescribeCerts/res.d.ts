export interface DescribeCertsResponse {
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * 网站业务的证书信息。
     */
    Certs: {
        /**
         * 证书到期日期。字符串格式。
         * @example `2021-09-12`
         */
        EndDate: string;
        /**
         * 证书是否关联域名。取值：
         * - **true**：已关联
         * - **false**：未关联
         * @example `true`
         */
        DomainRelated: boolean;
        /**
         * 证书签发日期。字符串格式。
         * @example `2019-09-12`
         */
        StartDate: string;
        /**
         * 证书颁发机构。
         * @example `Symantec`
         */
        Issuer: string;
        /**
         * 证书名称。
         * @example `testcert`
         */
        Name: string;
        /**
         * 证书关联的域名。
         * @example `www.aliyun.com`
         */
        Common: string;
        /**
         * 证书ID。
         * @example `81`
         */
        Id: number;
        /**
         * 全局证书ID，证书ID+"-cn-hangzhou"。如果证书ID=123，则CertIdentifier=“123-cn-hangzhou”。
         * @example `126345-ap-southeast-1`
         */
        CertIdentifier: string;
    }[];
}
