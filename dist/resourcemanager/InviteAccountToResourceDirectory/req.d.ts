export interface InviteAccountToResourceDirectoryRequest {
    /**
     * 被邀请账号ID或登录邮箱。
     * @example `someone@example.com`
     */
    "TargetEntity": string;
    /**
     * 被邀请账号类型。
     * - Account：账号ID。
     * - Email：账号登录邮箱。
     * @example `Email`
     */
    "TargetType": string;
    /**
     * 备注。
     * 最大长度为1024个字符。
     * @example `欢迎您加入`
     */
    "Note"?: string;
    /**
     * 标签
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `v1`
         */
        Value: string;
    }[];
}
