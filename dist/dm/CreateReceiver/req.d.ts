export interface CreateReceiverRequest {
    /**
     * 列表名称
     * @example `xme`
     */
    "ReceiversName": string;
    /**
     * 列表别称
     * @example `vme`
     */
    "ReceiversAlias": string;
    /**
     * 描述
     * @example `列表描述`
     */
    "Desc"?: string;
}
