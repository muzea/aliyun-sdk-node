interface DescribeUserCertificateDetailRequest {
    "RegionId"?: string;
    /**
    * 证书ID。调用**CreateUserCertificate**接口添加证书返回结果中的**CertId**。
    * @example `12345`
    */ "CertId": number;
    /**
    * 请求的来源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { DescribeUserCertificateDetailRequest };