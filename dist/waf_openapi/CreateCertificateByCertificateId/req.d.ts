export interface CreateCertificateByCertificateIdRequest {
    /**
     * 要添加SSL证书的域名。
     * > 您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 要添加的证书的ID。
     * > 您可以调用[DescribeCertificates](~~160783~~)查询域名关联的所有SSL证书的ID。
     * @example `3384669`
     */
    "CertificateId": number;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-zz11sr5****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
