export interface SubmitOperationAuditInfoRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名。支持一个或多个域名，多个域名之间用英文逗号（,）分隔。
     * @example `xxxx.com,yyyy.cn`
     */
    "DomainName": string;
    /**
     * 业务类型。取值：
     * **1**：线下转移域名，即将域名从当前的阿里云账号转移至另一个阿里云账号。
     * @example `1`
     */
    "AuditType": number;
    /**
     * 待审核信息，不同的业务类型显示的信息不同。
     * @example `个人 {"regType":1,"registrantName":"张三","registrantNo":"2201919190**","telephone":"1390123****","account":"zhangsan@alimail.com","reason":1,"remark":"账号丢失"} 企业 {"regType":2,"registrantName":"华大信通","operatorName":"王武","operatorNo":"2201811987101901**",      "operatorPhone":"1390123****","account":"wangwu@alimail.com","companyNo":"91361100MA35N6****","reason":2,"remark":"账号丢失"}`
     */
    "AuditInfo"?: string;
    /**
     * 审核ID。
     * @example `1`
     */
    "Id"?: number;
}
