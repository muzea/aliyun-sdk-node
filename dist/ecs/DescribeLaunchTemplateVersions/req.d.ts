export interface DescribeLaunchTemplateVersionsRequest {
    /**
     * 实例启动模板所属的地域ID。
     * 您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 一个或多个实例启动模板版本。
     * @example `1`
     */
    "LaunchTemplateVersion"?: number[];
    /**
     * 实例启动模板ID。
     * 您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。
     * @example `lt-bp168lnahrdwl39p****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 实例启动模板名称。
     * @example `testLaunchTemplateName`
     */
    "LaunchTemplateName"?: string;
    /**
     * 通过范围指定版本时的最小版本号。
     * @example `1`
     */
    "MinVersion"?: number;
    /**
     * 通过范围指定版本时的最大版本号。
     * @example `10`
     */
    "MaxVersion"?: number;
    /**
     * 是否查询默认版本。
     * @example `true`
     */
    "DefaultVersion"?: boolean;
    /**
     * 是否查询模板配置详细信息。取值范围：
     * - true：查询模版配置详细信息，在模版基本信息的基础上，还会返回模版配置细节，如镜像ID、系统盘大小等。
     * - false：只查询模版基本信息，如模版ID、模版名称、默认版本等。
     * 默认值：true。
     * @example `true`
     */
    "DetailFlag"?: boolean;
    /**
     * 实例启动模板列表的页码。
     * 起始值：1。
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
}
