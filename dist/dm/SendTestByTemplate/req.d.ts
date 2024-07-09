export interface SendTestByTemplateRequest {
    /**
     * 模板ID
     * @example `123`
     */
    "TemplateId": number;
    /**
     * 发信地址，长度限制60
     * @example `账号+@+域名`
     */
    "AccountName": string;
    /**
     * UserName，长度限制30
     * @example `姓名`
     */
    "UserName"?: string;
    /**
     * NickName，长度限制30
     * @example `昵称`
     */
    "NickName"?: string;
    /**
     * Birthday，长度限制30
     * @example `2000/01/01`
     */
    "Birthday"?: string;
    /**
     * Gender，长度限制30
     * @example `先生`
     */
    "Gender"?: string;
    /**
     * Mobile，长度限制30
     * @example `1380000****`
     */
    "Mobile"?: string;
    /**
     * 收信地址，长度限制60
     * @example `账号+@+域名`
     */
    "Email": string;
}
