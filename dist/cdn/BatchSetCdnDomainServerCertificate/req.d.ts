interface BatchSetCdnDomainServerCertificateRequest {
    "RegionId"?: string;
    /**
    * 指定证书所属加速域名，属于https加速类型，多个域名用逗号（,）隔开。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * HTTPS证书是否启用。
    * - **on**：启用。
    * - **off**：不启用。
    * 默认取值：**off**。
    * @example `on`
    */ "SSLProtocol": string;
    "OwnerId"?: number;
    /**
    * 证书名称。
    * @example `yourCertName`
    */ "CertName"?: string;
    /**
    * **upload**为上传证书，**cas**为证书中心证书。
    * @example `cas`
    */ "CertType"?: string;
    /**
    * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
    * @example `yourSSLPub`
    */ "SSLPub"?: string;
    /**
    * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
    * @example `yourSSLPri`
    */ "SSLPri"?: string;
    /**
    * 地域。
    * @example `your region`
    */ "Region"?: string;
    /**
    * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
    * @example `1`
    */ "ForceSet"?: string;
}
export { BatchSetCdnDomainServerCertificateRequest };