export interface DescribeDeploymentSetsRequest {
    /**
     * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 部署集列表的页码。
     * 起始值为1。
     * 默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 部署集ID列表。取值可以由多个部署集ID组成一个JSON数组，格式为`["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]`。最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["ds-bp67acfmxazb4ph****", "ds-bp67acfmxazb4pi****", … "ds-bp67acfmxazb4pj****"]`
     */
    "DeploymentSetIds"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "NetworkType"?: string;
    /**
     * 部署策略。取值范围：
     * - Availability：高可用策略。
     * - AvailabilityGroup：部署集组高可用策略。
     * @example `Availability`
     */
    "Strategy"?: string;
    /**
     * 部署集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能`以http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testDeploymentSetName`
     */
    "DeploymentSetName"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "Granularity"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "Domain"?: string;
}
