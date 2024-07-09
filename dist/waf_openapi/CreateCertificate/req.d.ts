export interface CreateCertificateRequest {
    /**
     * 已接入WAF的域名名称。
     * @example `www.example.com`
     */
    "Domain"?: string;
    /**
     * 证书文件内容。
     * @example `-----BEGIN CERTIFICATE----- 62EcYPWd2Oy1vs6MTXcJSfN9Z7rZ9fmxWr2BFN2XbahgnsSXM48ixZJ4krc+1M+j2kcubVpsE2cgHdj4v8H6jUz9Ji4mr7vMNS6dXv8PUkl/qoDeNGCNdyTS5NIL5ir+g92cL8IGOkjgvhlqt9vc65Cgb4mL+n5+DV9uOyTZTW/MojmlgfUekC2xiXa54nxJf17Y1TADGSbyJbsC0Q9nIrHsPl8YKkvRWvIAqYxXZ7wRwWWmv4TMxFhWRiNY7yZIo2ZUhl02SIDNggIEeg== -----END CERTIFICATE-----`
     */
    "Certificate"?: string;
    /**
     * 证书对应的私钥文件内容。
     * @example `-----BEGIN RSA PRIVATE KEY----- DADTPZoOHd9WtZ3UKHJTRgNQmioPQn2bqdKHop+B/dn/4VZL7Jt8zSDGM9sTMThLyvsmLQKBgQCr+ujntC1kN6pGBj2Fw2l/EA/W3rYEce2tyhjgmG7rZ+A/jVE9fld5sQra6ZdwBcQJaiygoIYoaMF2EjRwc0qwHaluq0C15f6ujSoHh2e+D5zdmkTg/3NKNjqNv6xA2gYpinVDzFdZ9Zujxvuh9o4Vqf0YF8bv5UK5G04RtKadOw== -----END RSA PRIVATE KEY-----`
     */
    "PrivateKey": string;
    /**
     * 证书名称。
     * @example `CertName`
     */
    "CertificateName": string;
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstanceInfo](~~140857~~)接口查看当前WAF实例ID。
     * @example `waf_elasticity-cn-0xldbqt****`
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
