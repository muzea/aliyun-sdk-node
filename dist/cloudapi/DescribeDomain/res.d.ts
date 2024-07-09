export interface DescribeDomainResponse {
    /**
     * 证书私钥
     * @example `xxx`
     */
    CertificatePrivateKey: string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    DomainName: string;
    /**
     * 自定义域名绑定状态，取值：
     * - BINDING：正常
     * - BOUND：未生效
     * @example `BINDING`
     */
    DomainBindingStatus: string;
    /**
     * 域名相关备注，如描述域名异常状态原因
     * @example `该域名未备案`
     */
    DomainRemark: string;
    /**
     * SSL证书ID，系统自动生成唯一编号
     * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
     */
    CertificateId: string;
    /**
     * 使用WebSocket的域名的状态
     * @example `NORMAL`
     */
    DomainWebSocketStatus: string;
    /**
     * 请求唯一标识
     * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
     */
    RequestId: string;
    /**
     * SSL证书名称
     * @example `myCertificate`
     */
    CertificateName: string;
    /**
     * 域名合法状态，取值：
     * - NORMAL：正常
     * - ABNORMAL：异常，该状态会影响API调用，需尽快解决
     * @example `NORMAL`
     */
    DomainLegalStatus: string;
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    GroupId: string;
    /**
     * 证书内容
     * @example `xxx`
     */
    CertificateBody: string;
    /**
     * 系统为分组分配的二级域名
     * @example `xxx-cn-hangzhou.alicloudapi.com`
     */
    SubDomain: string;
    /**
     * 域名解析情况，取值：
     * - RESOLVED：已解析
     * - UNRESOLVED：未解析
     * @example `RESOLVED`
     */
    DomainCNAMEStatus: string;
    /**
     * 证书生效时间戳（毫秒）
     * @example `1672502400000`
     */
    CertificateValidStart: number;
    /**
     * 证书失效时间戳（毫秒）
     * @example `1704038400000`
     */
    CertificateValidEnd: number;
}
