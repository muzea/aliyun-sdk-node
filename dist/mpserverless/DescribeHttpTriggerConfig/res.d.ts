export interface DescribeHttpTriggerConfigResponse {
    /**
     * 是否开启HTTP触发功能。
     * @example `true`
     */
    EnableService: boolean;
    /**
     * Http触发绑定的自定义域名的CNAME地址。
     * @example `724d************795a2.custom.bspapp.com`
     */
    CustomDomainCname: string;
    /**
     * 请求ID。
     * @example `4555773F-769B-4960-87E6-16009E5A4844`
     */
    RequestId: string;
    /**
     * 默认域名。
     * @example `724dade5-492f-426b-a5df-ff****0795a2.bspapp.com`
     */
    DefaultEndpoint: string;
    /**
     * Http触发绑定的自定义域名的证书信息。
     * @example `{"notAfter":"2021-09-28T08:21:42Z","notBefore":"2021-06-30T08:21:43Z","subject":"CN=*.example.com"}`
     */
    CustomDomainCertificateInfo: string;
    /**
     * Http触发绑定的自定义域名。
     * @example `abc.example.com`
     */
    CustomDomain: string;
}
