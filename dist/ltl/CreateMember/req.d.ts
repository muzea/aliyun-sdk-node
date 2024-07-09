export interface CreateMemberRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 阿里云RAM用户UID。
     * @example `19720316234381****`
     */
    "MemberUid": string;
    /**
     * 账户名称。
     * 长度为2~30字符，可以包含中文、英文字母、数字、下划线（_）、横线（-）、英文句号（.）和圆括号（()）。
     * @example `某公司`
     */
    "MemberName": string;
    /**
     * 账户联系人。
     * 长度为2~30字符，可以包含中文、英文字母、数字、下划线（_）、横线（-）、英文句号（.）和圆括号（()）。
     * @example `张三`
     */
    "MemberContact": string;
    /**
     * 账户电话。可包含数字和横线（-）。
     * @example `1381111****`
     */
    "MemberPhone": string;
    /**
     * 备注信息。
     * 长度限制为100字符。
     * @example `某应用某业务`
     */
    "Remark"?: string;
}
