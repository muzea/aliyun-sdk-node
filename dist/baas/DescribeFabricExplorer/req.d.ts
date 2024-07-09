export interface DescribeFabricExplorerRequest {
    /**
     * 组织ID
     * @example `peers-test11-tzwny25vqicq`
     */
    "OrganizationId": string;
    /**
     * 请求方法
     * @example `GET`
     */
    "ExMethod": string;
    /**
     * 请求URL
     * @example `/api/v1/channel`
     */
    "ExUrl": string;
    /**
     * 请求体（注：保留使用）
     * @example `{}`
     */
    "ExBody"?: string;
}
