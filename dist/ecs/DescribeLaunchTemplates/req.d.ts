export interface DescribeLaunchTemplatesRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 启动模板的标签列表。
     */
    "TemplateTag"?: {
        /**
         * 启动模板的标签键。N的取值范围：1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 启动模板的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 实例启动模板列表的页码。起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 启动模板所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-acfmxazb4p****`
     */
    "TemplateResourceGroupId"?: string;
    /**
     * 一个或多个实例启动模板ID，最多支持查询100个启动模板。您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。
     * @example `lt-m5e3ofjr1zn1aw7q****`
     */
    "LaunchTemplateId"?: string[];
    /**
     * 一个或多个实例启动模板名称，最多支持查询100个启动模板。
     * @example `wd-152630748****`
     */
    "LaunchTemplateName"?: string[];
}
