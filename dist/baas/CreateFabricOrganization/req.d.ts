export interface CreateFabricOrganizationRequest {
    /**
     * 名称
     * @example `name`
     */
    "OrganizationName": string;
    /**
     * 区域
     * @example `cn-hangzhou`
     */
    "Location": string;
    /**
     * 域名
     * @example `domain`
     */
    "Domain": string;
    /**
     * 描述
     * @example `description`
     */
    "Description"?: string;
    /**
     * 规格名：
     * - starter：体验版
     * - basic：基础版
     * - enterprise：企业版
     * - enterprise-sgx：企业安全版
     * @example `basic`
     */
    "SpecName": string;
    /**
     * 节点数据量
     * @example `2`
     */
    "PeersCount"?: number;
    /**
     * 计费周期
     * @example `12`
     */
    "PaymentDuration": number;
    /**
     * 周期单位
     * @example `2`
     */
    "PaymentDurationUnit": string;
}
