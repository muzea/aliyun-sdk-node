export interface CreateClientUserRequest {
    /**
     * 自定义身份源配置ID。
     * @example `727`
     */
    "IdpConfigId": string;
    /**
     * 用户名称。
     * @example `张三`
     */
    "Username": string;
    /**
     * 部门ID。
     * @example `10797`
     */
    "DepartmentId"?: string;
    /**
     * 电子邮件地址。
     * @example `johndoe@example.com`
     */
    "Email": string;
    /**
     * 手机号码，不需要带国家编码。
     * @example `13641966835`
     */
    "MobileNumber"?: string;
    /**
     * 密码。若为空则自动生成随机密码。
     * @example `kehudiyi`
     */
    "Password"?: string;
    /**
     * 用户描述。
     * @example `示例用户`
     */
    "Description"?: string;
}
