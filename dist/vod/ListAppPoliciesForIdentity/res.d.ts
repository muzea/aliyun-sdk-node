export interface ListAppPoliciesForIdentityResponse {
    /**
     * 请求ID。
     * @example `C9F3E715-B3B8-4D*****27-3A70346F0E04`
     */
    RequestId: string;
    /**
     * 权限策略名称列表。
     * > 最多返回前100条数据。
     */
    AppPolicyList: {
        /**
         * 角色授权应用策略的创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-01T01:01:01Z`
         */
        CreationTime: string;
        /**
         * 策略描述。
         * @example `App full access permission`
         */
        Description: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 策略值。
         * @example `****`
         */
        PolicyValue: string;
        /**
         * 策略名称。
         * @example `VODAppFullAccess`
         */
        PolicyName: string;
        /**
         * 角色授权应用策略的修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-01T01:08:01Z`
         */
        ModificationTime: string;
        /**
         * 策略类型。
         * - **System**（系统策略）
         * - **Custom**（用户自定义）
         * @example `System`
         */
        PolicyType: string;
    }[];
}
