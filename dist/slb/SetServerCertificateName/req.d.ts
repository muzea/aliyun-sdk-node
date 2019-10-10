interface SetServerCertificateNameRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 服务器证书ID。
    * @example `139a00604ad-cn-east-hangzhou-01`
    */ "ServerCertificateId": string;
    /**
    * 服务器证书名称。
    * 名称长度为 1~80 个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
    * @example `abc`
    */ "ServerCertificateName": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { SetServerCertificateNameRequest };