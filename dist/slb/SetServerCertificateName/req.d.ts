export interface SetServerCertificateNameRequest {
    /**
     * 传统型负载均衡实例的地域。您可以通过调用[DescribeRegions](~~2401682~~) 接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务器证书ID。
     * @example `	123157xxxxxxx_166f8204689_1714763408_7099*******`
     */
    "ServerCertificateId": string;
    /**
     * 要上传的非阿里云签发的服务器证书的名称。长度限制为1~80个字符，允许包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）和星号（*）。
     * @example `mycert01`
     */
    "ServerCertificateName": string;
}
