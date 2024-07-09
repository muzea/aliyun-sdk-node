export interface SaveContactWhiteListRequest {
    /**
     * 实例id
     * @example `c415bb6c-2e6f-46aa-afd9-3b65b6dbe2bc`
     */
    "InstanceId": string;
    /**
     * 白名单列表
     * @example `{}`
     */
    "ContactWhiteListsJson"?: string;
    /**
     * 联系人白名单列表
     * @example `{}`
     */
    "ContactWhiteListList"?: string[];
}
