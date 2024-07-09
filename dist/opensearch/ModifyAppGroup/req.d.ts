export interface ModifyAppGroupRequest {
    /**
     * 应用名称。
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 描述
         * @example `"实例描述"`
         */
        description: string;
        /**
         * 在线版本。
         * @example `1223232`
         */
        currentVersion: string;
        /**
         * 行业类型：
         * - general：通用行业。
         * - ecommerce：电商行业。
         * - education：教育行业。
         * - esports：游戏行业。
         * - community：内容社区。
         * @example `"ecommerce"`
         */
        domain: string;
        /**
         * 实例所属的资源组ID。
         * @example `rg-****`
         */
        resourceGroupId: string;
    };
    /**
     * 是否进行升级前校验。true表示校验，false表示不校验。
     * @example `true`
     */
    "dryRun"?: boolean;
}
