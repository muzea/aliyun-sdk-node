export interface CreateDynamicTagGroupRequest {
    /**
     * 资源的标签键。
     * 关于如何查询资源的标签键，请参见[DescribeTagKeyList](~~145558~~)。
     * @example `ecs_instance`
     */
    "TagKey": string;
    /**
     * 报警联系组。N的取值范围：1~100。应用分组的报警通知会发送给该报警联系组中的报警联系人。
     * 报警联系组是一组报警联系人，可以包含一个或多个报警联系人。关于如何创建报警联系人和报警联系组，请参见[PutContact](~~114923~~)和[PutContactGroup](~~114929~~)。关于如何获取报警联系组，请参见[DescribeContactGroupList](~~114922~~)。
     * @example `ECS_Group`
     */
    "ContactGroupList": string[];
    /**
     * 标签生成应用分组的匹配表达式。
     */
    "MatchExpress": {
        /**
         * 资源标签值的匹配方法。N的取值为1。取值：
         * - contains：包含。
         * - startWith：前缀。
         * - endWith：后缀。
         * - notContains：不包含。
         * - equals：等于。
         * - all：全部。
         * > 参数`MatchExpress.N.TagValueMatchFunction`和`MatchExpress.N.TagValue`必须同时设置。
         * @example `contains`
         */
        TagValueMatchFunction: string;
        /**
         * 资源标签值。N取值为1。
         * > 参数`MatchExpress.N.TagValueMatchFunction`和`MatchExpress.N.TagValue`必须同时设置。
         * @example `instance`
         */
        TagValue: string;
        /**
         * 用来创建分组的Tag的Key。如果包含此Key的资源有多个，那么会根据过滤条件，把符合的资源按相同的Key-Value，添加到相同的分组内。
         * @example `appname`
         */
        TagName: string;
    }[];
    /**
     * 标签归属的地域ID。
     * @example `cn-hangzhou`
     */
    "TagRegionId"?: string;
    /**
     * 应用分组是否开启自动订阅事件通知。当应用分组内资源发生严重和警告级别的事件时，云监控发送报警通知。取值：
     * - true：开启。
     * - false（默认值）：关闭。
     * @example `true`
     */
    "EnableSubscribeEvent"?: boolean;
    /**
     * 应用分组是否开启自动安装云监控插件。云监控自动为应用分组内的主机安装云监控插件。取值：
     * - true：开启。
     * - false（默认值）：关闭。
     * @example `true`
     */
    "EnableInstallAgent"?: boolean;
    /**
     * 资源标签值的条件表达式之间的关系。取值：
     * - and（默认值）：和。
     * - or：或。
     * @example `and`
     */
    "MatchExpressFilterRelation"?: string;
    /**
     * 报警模板ID。
     * 关于如何查询报警模板ID，请参见[DescribeMetricRuleTemplateList](~~114982~~)。
     * @example `85****`
     */
    "TemplateIdList"?: string[];
}
