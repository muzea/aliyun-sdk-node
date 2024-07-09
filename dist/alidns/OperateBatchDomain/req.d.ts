export interface OperateBatchDomainRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 批量操作类型，取值：
     * - **DOMAIN_ADD**：批量添加域名
     * - **DOMAIN_DEL**：批量删除域名
     * - **RR_ADD**：批量添加解析
     * - **RR_DEL**：批量删除解析（删除满足N.RR、N.VALUE、N.RR&amp;N.VALUE条件的解析记录。如果无N.RR&&N.VALUE则清空参数DomainRecordInfo.N.Domain下的解析记录）
     * @example `RR_ADD`
     */
    "Type": string;
    /**
     * 用户提交的数据（POPAPI确认size，最大1000条数据）。
     */
    "DomainRecordInfo": {
        /**
         * 记录类型。例如：A、AAAA、TXT、MX、CNAME等。
         * > 批量操作类型为**RR_ADD**、**RR_DEL**时必需。
         * @example `MX`
         */
        Type: string;
        /**
         * 记录值。
         * > 批量操作类型为**RR_ADD**、**RR_DEL**时必需。
         * @example `fd87da3c4528844d45af39200155a905`
         */
        Value: string;
        /**
         * 生效时间（单位：秒），默认***600***。
         * @example `600`
         */
        Ttl: number;
        /**
         * 域名名称。
         * > 用户提交的数据， N 从 1 开始，最多 1000 条数据。由于HTTP请求头限制，超过 1000 条的数据会被忽略，不予处理。请勿超过1000条数据。
         * @example `dns-example.top`
         */
        Domain: string;
        /**
         * 解析请求来源。默认：default。
         * @example `default`
         */
        Line: string;
        /**
         * 新的主机记录（仅修改操作时使用，外部用户不支持）。
         * @example `mail`
         */
        NewRr: string;
        /**
         * 主机记录。
         * > 批量操作类型为**RR_ADD**、**RR_DEL**时必需。
         * @example `zhaohui`
         */
        Rr: string;
        /**
         * MX优先级。
         * 记录类型为MX时必需。默认：10。
         * @example `5`
         */
        Priority: number;
        /**
         * 新的记录类型代码（仅修改操作时使用，外部用户不支持）。
         * @example `AAAA`
         */
        NewType: string;
        /**
         * 新的记录值（仅修改操作时使用，外部用户不支持）。
         * @example `114.92.XX.XX`
         */
        NewValue: string;
    }[];
}
