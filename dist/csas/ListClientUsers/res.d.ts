export interface ListClientUsersResponse {
    /**
     * 本次请求的ID。
     * @example `FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE`
     */
    RequestId: string;
    /**
     * 用户信息。
     */
    Data: {
        /**
         * 记录总数。
         * @example `2`
         */
        TotalNum: number;
        /**
         * 用户信息列表。
         */
        DataList: {
            /**
             * 用户ID。
             * @example `1970`
             */
            Id: string;
            /**
             * 自定义身份源配置ID。
             * @example `1026`
             */
            IdpConfigId: string;
            /**
             * 用户名称。
             * @example `张三`
             */
            Username: string;
            /**
             * 用户唯一标识。
             * @example `su_dead7216****`
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
             * @example `15800820468`
             */
            MobileNumber: string;
            /**
             * 部门ID。
             * @example `10800`
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
                 * @example `105`
                 */
                Id: string;
                /**
                 * 部门名称。
                 * @example `示例部门`
                 */
                Name: string;
            };
        }[];
    };
}
