export interface UpdateCommerceSettingRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId": string;
    /**
     * 手机号码。
     * @example `1380000****`
     */
    "PhoneNumber": string;
    /**
     * 是否启用购物车。取值：
     * - true：启用
     * - false：不启用
     * @example `true`
     */
    "CartEnable": boolean;
    /**
     * 是否显示目录。取值：
     * - true：显示
     * - false：不显示
     * @example `false`
     */
    "CatalogVisible": boolean;
}
