export interface DeleteAccessKeyRequest {
    /**
     * 指定用户名。
     * @example `zhangq****`
     */
    "UserName"?: string;
    /**
     * 指定要删除的`AccessKeyId`。
     * @example `0wNEpMMlzy7s****`
     */
    "UserAccessKeyId"?: string;
}
