export interface TransferDomainRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名列表，英文逗号隔开；仅支持阿里云注册的域名。
     * @example `test1.com,test2.com`
     */
    "DomainNames": string;
    /**
     * 备注。
     * @example `test domain transfer`
     */
    "Remark"?: string;
    /**
     * 将云解析列表中的域名和解析记录转移到目标用户ID下。
     * @example `12345678`
     */
    "TargetUserId": number;
}
