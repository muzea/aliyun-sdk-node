export interface CreateFabricConsortiumRequest {
    /**
     * 实例所在的位置信息，和**RegionId**一致
     * @example `cn-hangzhou`
     */
    "Location": string;
    /**
     * Orderer类型：
     * - kafka （不再支持）
     * - etcdraft
     * @example `etcdraft`
     */
    "OrdererType": string;
    /**
     * 区域
     * @example `random`
     */
    "ZoneId"?: string;
    /**
     * 联盟名
     * @example `aaaaa`
     */
    "ConsortiumName": string;
    /**
     * 域名
     * @example `helloworld`
     */
    "Domain": string;
    /**
     * 联盟描述
     * @example `some`
     */
    "ConsortiumDescription"?: string;
    /**
     * 创建通道策略
     * @example `all`
     */
    "ChannelPolicy": string;
    /**
     * 规格：
     * - starter 体验版
     * - basic 基础版
     * - enterprise 企业版
     * - enterprise-sgx 企业安全版
     * @example `basic`
     */
    "SpecName": string;
    /**
     * Orderer数量
     * @example `2`
     */
    "OrderersCount"?: number;
    /**
     * Peer数量
     * @example `2`
     */
    "PeersCount"?: number;
    /**
     * 周期单位
     * @example `month`
     */
    "PaymentDurationUnit": string;
    /**
     * 计费周期
     * @example `2`
     */
    "PaymentDuration": number;
    /**
     * 组织列表。
     */
    "Organization"?: {
        /**
         * 组织ID
         * @example `peers-yidio-1tuigx42b1goc`
         */
        OrganizationId: string;
    }[];
}
