interface SetLiveDomainCertificateRequest {
    "RegionId"?: string;
    /**
    * 指定证书所属加速域名。属于`https`加速类型。
    * @example `play.yourdomain.com`
    */ "DomainName": string;
    /**
    * HTTPS证书是否启用。取值：
    * - **on**：启用
    * - **off（默认值）**：不启用
    * @example `off`
    */ "SSLProtocol": string;
    "OwnerId"?: number;
    /**
    * 证书名称。
    * @example `证书1`
    */ "CertName"?: string;
    "CertType"?: string;
    /**
    * 安全证书内容。
    * 不启用证书则无需输入，配置证书请输入证书内容。
    * @example `XXX`
    */ "SSLPub"?: string;
    /**
    * 私钥内容。
    * 不启用证书则无需输入，配置证书请输入私钥内容。
    * @example `XXX`
    */ "SSLPri"?: string;
    "ForceSet"?: string;
}
export { SetLiveDomainCertificateRequest };