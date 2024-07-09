export interface DescribeCdnFullDomainsBlockIPConfigRequest {
    /**
     * 查询IP/IP段列表，多个IP请用半角逗号（,）分隔，最大支持50个。
     * @example `1.XXX.XXX.1,2.XXX.XXX.2`
     */
    "IPList"?: string;
}
