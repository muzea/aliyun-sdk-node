interface CreateUserCertificateRequest {
    "RegionId"?: string;
    /**
    * 自定义证书名称。一个用户下的证书名称不能重复。
    * @example `auto-test-AXX`
    */ "Name": string;
    /**
    * 指定证书内容。要使用PEM编码格式。
    * @example `---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----`
    */ "Cert": string;
    /**
    * 指定证书私钥内容。要使用PEM编码格式。
    * @example `---BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----`
    */ "Key": string;
    /**
    * 指定请求的来源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * @example `ZH`
    */ "Lang"?: string;
}
export { CreateUserCertificateRequest };