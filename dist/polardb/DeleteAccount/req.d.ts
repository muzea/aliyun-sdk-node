export interface DeleteAccountRequest {
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 账号名称。
     * @example `testacc`
     */
    "AccountName": string;
}
