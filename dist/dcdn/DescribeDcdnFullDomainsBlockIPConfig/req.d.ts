export interface DescribeDcdnFullDomainsBlockIPConfigRequest {
    /**
     * 查询IP/IP段列表，多个IP请用半角逗号（,）分隔，最大支持50个。
     * @example `10.XX.XX.10/24`
     */
    "IPList"?: string;
}
