export interface DescribeMonitorGroupsRequest {
    /**
     * 返回结果中是否需要包含报警联系组。取值：
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "SelectContactGroups"?: boolean;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 搜索关键字。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 资源实例ID。该参数用于查询指定实例所在的应用分组。
     * @example `i-abcdefgh12****`
     */
    "InstanceId"?: string;
    /**
     * 应用分组名称。
     * @example `testGroup124`
     */
    "GroupName"?: string;
    /**
     * 返回结果是否包含已应用到应用分组的报警模板历史。取值：
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "IncludeTemplateHistory"?: boolean;
    /**
     * 应用分组类型。取值：
     * - custom：自建的应用分组。
     * - ehpc_cluster：从EHPC集群同步的应用分组。
     * - kubernetes：从容器服务Kubernetes版同步的应用分组。
     * @example `custom`
     */
    "Type"?: string;
    /**
     * 智能标签规则ID。
     * @example `6b882d9a-5117-42e2-9d0c-4749a0c6****`
     */
    "DynamicTagRuleId"?: string;
    /**
     * 通过智能标签创建应用分组的标签键。
     * @example `GroupKey1`
     */
    "GroupFounderTagKey"?: string;
    /**
     * 通过智能标签创建应用分组的标签值。
     * @example `GroupValue1`
     */
    "GroupFounderTagValue"?: string;
    /**
     * 应用分组ID。多个应用分组ID之间用半角逗号（,）分隔。
     * @example `92****`
     */
    "GroupId"?: string;
    /**
     * 应用分组的标签。
     */
    "Tag"?: {
        /**
         * 应用分组的标签键。N的取值范围：1~5。
         * @example `tagKey1`
         */
        Key: string;
        /**
         * 应用分组的标签值。N的取值范围：1~5。
         * @example `tagValue1`
         */
        Value: string;
    }[];
    /**
     * 应用分组类型。取值：
     * - custom：自建的应用分组。
     * - ehpc_cluster：从EHPC集群同步的应用分组。
     * - kubernetes：从容器服务Kubernetes版同步的应用分组。
     * - tag：通过标签自动创建的应用分组。
     * - resMgr：通过资源组创建的应用分组。
     * - ess：从弹性伸缩ESS同步的应用分组。
     * @example `custom`
     */
    "Types"?: string;
}
