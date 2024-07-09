export interface ListEnvironmentsRequest {
    /**
     * 环境类型， AddonName和EnvironmentType至少填一个。
     * @example `CS`
     */
    "EnvironmentType"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * Addon的名称，AddonName和EnvironmentType至少填一个。
     * @example `trace-java`
     */
    "AddonName"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzfurdatohtka`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `gfn_web_outbound_add`
         */
        Value: string;
    }[];
    /**
     * 绑定的资源ID。
     * @example `cb9229c48e41144dc96af190841808cb0`
     */
    "BindResourceId"?: string;
    /**
     * 付费套餐。
     * * EnvironmentType为CS时：可以指定为CS_Basic（默认值）或CS_Pro。
     * * EnvironmentType为其它值时，请输入空值。
     * @example `CS_Pro`
     */
    "FeePackage"?: string;
}
