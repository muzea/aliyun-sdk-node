export interface DescDomainResponse {
    /**
     * spf记录
     * @example `include:spf1.dm.aliyun.com`
     */
    SpfRecord: string;
    /**
     * cName验证标志，成功：0，失败：1。
     * @example `0`
     */
    CnameConfirmStatus: string;
    /**
     * 默认域名
     * @example `0`
     */
    DefaultDomain: string;
    /**
     * 创建时间
     * @example `2019-09-29T12:49Z`
     */
    CreateTime: string;
    /**
     * CNAME记录
     * @example `dmtrace`
     */
    CnameRecord: string;
    /**
     * track验证
     * @example `1`
     */
    CnameAuthStatus: string;
    /**
     * 备案状态。**1**表示已备案，**0**表示未备案。
     * @example `1`
     */
    IcpStatus: string;
    /**
     * 所有权记录
     * @example `121309ohdsa`
     */
    DnsTxt: string;
    /**
     * 域名
     * @example `abc.com`
     */
    DomainName: string;
    /**
     * 域名ID
     * @example `158910`
     */
    DomainId: string;
    /**
     * spf记录值
     * @example `v=xxxx`
     */
    DnsSpf: string;
    /**
     * spf验证标志，成功：0，失败：1。
     * @example `1`
     */
    SpfAuthStatus: string;
    /**
     * 请求ID
     * @example `51B74264-46B4-43C8-A9A0-6B8E8BC04F34`
     */
    RequestId: string;
    /**
     * MX记录
     * @example `mx01.dm.aliyun.com`
     */
    MxRecord: string;
    /**
     * mx验证标志，成功：0，失败：1。
     * @example `1`
     */
    MxAuthStatus: string;
    /**
     * MX记录值
     * @example `abc-com.xxxx.com`
     */
    DnsMx: string;
    /**
     * 域名状态。说明是否验证成功，取值：
     * - **0**：可用，已验证通过
     * - **1**：不可用，验证未通过
     * - **2**：可使用，未做cname，未备案
     * - **3**：可使用，未备案
     * - **4**：可使用，未做cname
     * @example `1`
     */
    DomainStatus: string;
    /**
     * 主域名
     * @example `abc.com`
     */
    TlDomainName: string;
    /**
     * CNAME记录
     * @example `tracedm.aliyuncs.com`
     */
    TracefRecord: string;
    /**
     * 域类型
     * @example `0c40d5f125af4e42892a`
     */
    DomainType: string;
    /**
     * spf记录，以前spf展示内容需要调用端根据响应中的spfRecord计算得出，新增字段spfRecordV2取代spfRecord， 调用端拿到该字段后可以直接进行展示；
     * @example `v=spf1 include:spf1.dm.aliyun.com -all`
     */
    SpfRecordV2: string;
    /**
     * 用户需要在dns上设置的dkim记录的key
     * @example `aliyun-cn-hangzhou._domainkey.hangzhou26`
     */
    DkimRR: string;
    /**
     * 用户需要在dns上设置的dkim记录的value
     * @example `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSI...`
     */
    DkimPublicKey: string;
    /**
     * 用户在dns设置的dkim记录是否已经校验通过, 0:通过， 1:未通过
     * @example `0`
     */
    DkimAuthStatus: string;
    /**
     * 主机记录
     * @example `xxx`
     */
    HostRecord: string;
    /**
     * DMARC记录值
     * @example `v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com`
     */
    DmarcRecord: string;
    /**
     * 通过公网域名解析到的DMARC记录值
     * @example `v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com`
     */
    DnsDmarc: string;
    /**
     * DMARC授权状态
     * @example `1`
     */
    DmarcAuthStatus: number;
    /**
     * DMARC主机记录值
     * @example `_dmarc.xxx`
     */
    DmarcHostRecord: string;
}
