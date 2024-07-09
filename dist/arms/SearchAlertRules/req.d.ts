export interface SearchAlertRulesRequest {
    /**
     * 报警规则名称。
     * @example `AlertRuleTitle`
     */
    "Title"?: string;
    /**
     * 报警规则类型：
     * - `1`：基于下钻数据集的自定义监控报警规则。
     * - `3`：基于平铺数据集的自定义监控报警规则。
     * - `4`：前端监控报警规则，包含默认前端监控报警规则（AlertType=6）。
     * - `5`：应用监控报警规则，包含默认应用监控报警规则（AlertType=7）。
     * - `6`：默认前端监控报警规则。
     * - `7`：默认应用监控报警规则。
     * - `8`：链路追踪Tracing Analysis报警规则。
     * - `101`：Prometheus监控报警规则。
     * @example `4`
     */
    "Type"?: string;
    /**
     * 查询结果分页的页码。默认为`1`。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 查询结果分页的每页项目数量。默认为`10`。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 报警数据地域ID。**RegionId**和**SystemRegionId**的映射关系，请参见表格下方补充说明。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * <props="china">报警规则关联的ARMS应用的ID标识串。获取方式请参见[如何获取应用PID](https://help.aliyun.com/document_detail/186100.html?spm=a2c4g.11186623.6.792.1b50654cqcDPyk#title-imy-7gj-qhr)。</props>
     * <props="intl">报警规则关联的ARMS应用的ID标识串。获取方式请参见[如何获取应用PID](https://www.alibabacloud.com/help/zh/doc-detail/186100.htm?spm=a2cdw.13409063.0.0.7a72281f0bkTfx#title-imy-7gj-qhr)。</props>
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 报警规则对应的应用类型，分为以下类型：
     * - `TRACE`：应用监控报警规则
     * - `RETCODE`：前端监控报警规则
     * @example `TRACE`
     */
    "AppType"?: string;
    /**
     * 报警规则所在地域ID。**RegionId**和**SystemRegionId**的映射关系，请参见表格下方补充说明。
     * @example `cn-hangzhou`
     */
    "SystemRegionId"?: string;
    /**
     * 资源组ID，您可以通过**资源管理**控制台获取。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 报警规则ID。
     * @example `12345`
     */
    "AlertRuleId"?: string;
    /**
     * 标签
     */
    "Tags"?: {
        /**
         * 精确查找弹性伸缩资源时使用的标签键。标签键长度的取值范围：1~128。
         * `Tags`用于精确查找绑定了指定标签的弹性伸缩资源，由一个键值对组成。
         * - 仅指定`Tags.Key`时，则返回关联该标签键的所有资源。
         * - 仅指定`Tags.Value`时，则出现`MissingParameter.TagKey`的报错提示。
         * - 同时指定多个标签键值对时，仅同时满足所有标签键值对的弹性伸缩资源会被查找到。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。非必填，可以为空字符串。最多支持128个字符，不能以```acs:```开头，不能包含```http://```或者```https://```。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
