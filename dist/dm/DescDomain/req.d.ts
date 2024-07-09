export interface DescDomainRequest {
    /**
     * 域名ID。可以通过QueryDomainByParam获取。
     * @example `13464`
     */
    "DomainId": number;
    /**
     * 判断是否要实时dns解析
     * @example `true`
     */
    "RequireRealTimeDnsRecords"?: boolean;
}
