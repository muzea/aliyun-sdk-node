export interface DescribeTransferDomainsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 转移类型。取值范围：
     * - IN：转入到本账号的列表
     * - OUT：本账号转出的列表
     * @example `IN`
     */
    "TransferType": string;
    /**
     * 查询指定域名的转移记录。
     * @example `dns-example.top`
     */
    "DomainName"?: string;
    /**
     * 查看从123456转移给自己的域名列表。
     * @example `123456`
     */
    "FromUserId"?: number;
    /**
     * 查看自己转移给123456的域名列表。
     * @example `123456`
     */
    "TargetUserId"?: number;
}
