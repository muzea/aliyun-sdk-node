export interface DeleteGatewaySlbRequest {
    /**
     * 关联记录ID。
     * @example `395`
     */
    "Id"?: string;
    /**
     * 删除网关时是否同时删除代购的SLB。
     * @example `true`
     */
    "DeleteSlb"?: boolean;
    /**
     * 网关唯一标识ID。
     * @example `gw-c9bc5afd61014165bd58f621b491****`
     */
    "GatewayUniqueId": string;
    /**
     * 待取消关联的SlbId。
     * @example `lb-uf6duug6s13x4abc8****`
     */
    "SlbId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
