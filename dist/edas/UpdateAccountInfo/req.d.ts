export interface UpdateAccountInfoRequest {
    /**
     * 账号名称
     * @example `edas-test`
     */
    "Name"?: string;
    /**
     * 联系方式
     * @example `1321234****`
     */
    "Telephone"?: string;
    /**
     * 电子邮箱地址
     * @example `1321234****@alibaba-inc.com`
     */
    "Email"?: string;
}
