export interface UpdateClientUserRequest {
    /**
     * 用户ID。
     * @example `20644`
     */
    "Id": string;
    /**
     * 部门ID。
     * @example `10701`
     */
    "DepartmentId"?: string;
    /**
     * 电子邮件地址。
     * @example `johndoe@example.com`
     */
    "Email"?: string;
    /**
     * 手机号码，不需要带国家编码。
     * @example `13641966835`
     */
    "MobileNumber"?: string;
    /**
     * 用户描述。
     * @example `示例用户`
     */
    "Description"?: string;
}
