export interface CreateCloudAccountRequest {
    /**
     * 成员名称。
     * 长度为2~50个字符或汉字，可包含汉字、英文字母、数字、下划线（_）、英文句点（.）和短划线（-）。
     * 成员名称在资源目录内必须唯一。
     * @example `admin-****`
     */
    "DisplayName": string;
    /**
     * 父资源夹ID。
     * @example `fd-bVaRIG****`
     */
    "ParentFolderId"?: string;
    /**
     * 云账号登录邮箱。
     * @example `someone@example.com`
     */
    "Email": string;
    /**
     * 结算账号ID。取值为空表示采用当前账号结算。
     * @example `12323344****`
     */
    "PayerAccountId"?: string;
}
