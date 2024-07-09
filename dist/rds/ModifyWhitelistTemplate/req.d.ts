export interface ModifyWhitelistTemplateRequest {
    /**
     * 该实例的IP白名单，多个IP地址请以英文逗号（,）隔开，不可重复。支持如下两种格式：
     * - IP地址形式，例如：10.23.XX.XX。
     * - CIDR形式，例如：10.23.XX.XX/24（无类域间路由，24表示地址中前缀的长度，取值范围为1~32）。
     * > 每个实例最多添加1000个IP或IP段，即所有IP白名单分组内的IP或IP段总和不能超过1000。当IP较多时，建议合并为IP段填入，例如10.23.XX.XX/24。
     * @example `139.196.X.X,101.132.X.X`
     */
    "IpWhitelist": string;
    /**
     * 白名单模板ID。
     * 在修改和删除操作中需要传入，可通过DescribeAllWhitelistTemplate获取。
     * @example `539`
     */
    "TemplateId"?: number;
    /**
     * 白名单模板名称。在创建模板时传入，创建后不可修改，同一账号下不可重名，以字母开头。可通过DescribeWhitelistTemplate获取。
     * @example `template_123`
     */
    "TemplateName"?: string;
    /**
     * 地域ID。可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。 关于资源组的更多信息，请参见什么是资源组。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
