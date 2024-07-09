export interface CreateCdnCertificateSigningRequestRequest {
    /**
     * 证书通用名称CN字段。
     * @example `CommonName`
     */
    "CommonName": string;
    /**
     * 证书扩展字段，绑定的域名，多个域名用逗号（,）分隔。
     * @example `example.com`
     */
    "SANs"?: string;
    /**
     * 机构名称，默认：Alibaba Inc。
     * @example `Alibaba Inc`
     */
    "Organization"?: string;
    /**
     * 部门名称，默认：Aliyun CDN。
     * @example `Aliyun CDN`
     */
    "OrganizationUnit"?: string;
    /**
     * 所属国家，默认：CN。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 省级地区，默认：Zhejiang。
     * @example `Zhejiang`
     */
    "State"?: string;
    /**
     * 市级地区，默认：Hangzhou。
     * @example `Hangzhou`
     */
    "City"?: string;
    /**
     * 邮箱。
     * @example `username@example.com`
     */
    "Email"?: string;
}
