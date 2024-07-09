export interface DeleteContactWhiteListRequest {
    /**
     * 联系人白名单id
     * @example `111111`
     */
    "ContactWhiteListId": string;
    /**
     * 操作人信息
     * @example `160131`
     */
    "Operator"?: string;
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
}
