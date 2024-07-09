export interface UpdateHttpTriggerConfigResponse {
    /**
     * 是否开启了HTTP触发功能。
     * @example `true`
     */
    EnableService: boolean;
    /**
     * HTTP触发绑定的自定义域名的CNAME地址。
     * @example `724d************795a2.custom.bspapp.com`
     */
    CustomDomainCname: string;
    /**
     * 请求ID。
     * @example `34C45988-2B24-****-A4DC-4D6C952890D8`
     */
    RequestId: string;
    /**
     * HTTP触发的默认域名。
     * @example `724dade5-492f-426b-a5df-ff****0795a2.bspapp.com`
     */
    DefaultEndpoint: string;
    /**
     * HTTP触发绑定的自定义域名的证书信息。
     * @example `{"notAfter":"2021-09-28T08:21:42Z","notBefore":"2021-06-30T08:21:43Z","subject":"CN=*.example.com"}`
     */
    CustomDomainCertificateInfo: string;
    /**
     * HTTP触发绑定的自定义域名。
     * @example `abc.example.com`
     */
    CustomDomain: string;
}
