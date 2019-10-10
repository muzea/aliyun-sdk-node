interface OperateBatchDomainRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 批量操作类型，取值：
    * - **DOMAIN_ADD**：批量添加域名
    * - **DOMAIN_DEL**：批量删除域名
    * - **RR_ADD**：批量添加解析
    * - **RR_DEL**：批量删除解析
    * @example `DOMAIN_ADD`
    */ "Type"?: string;
    "DomainRecordInfo"?: string[];
}
export { OperateBatchDomainRequest };