export interface GetClientUserResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 用户详情信息。
     */
    Data: {
        /**
         * 用户ID。
         * @example `83`
         */
        Id: string;
        /**
         * 自定义身份源配置ID。
         * @example `598`
         */
        IdpConfigId: string;
        /**
         * 用户名称。
         * @example `张三`
         */
        Username: string;
        /**
         * 用户唯一标识。
         * @example `su_abcd7215****`
         */
        UserId: string;
        /**
         * 用户描述。
         * @example `示例用户`
         */
        Description: string;
        /**
         * 电子邮件地址。
         * @example `johndoe@example.com`
         */
        Email: string;
        /**
         * 手机号码，不需要带国家编码。
         * @example `13641966835`
         */
        MobileNumber: string;
        /**
         * 部门ID。
         * @example `10713`
         */
        DepartmentId: string;
        /**
         * 用户启用状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Disabled`
         */
        Status: string;
        /**
         * 用户所属部门。
         */
        Department: {
            /**
             * 部门ID。
             * @example `107`
             */
            Id: string;
            /**
             * 部门名称。
             * @example `示例部门`
             */
            Name: string;
        };
    };
}
