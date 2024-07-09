export interface DescribeMonitorGroupsResponse {
    /**
     * 请求ID。
     * @example `F02B299A-D374-4595-9F55-7534D604F132`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页时每页显示的数据行数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录条数。
     * @example `10`
     */
    Total: number;
    Resources: {
        /**
         * 关联资源。
         */
        Resource: {
            /**
             * 应用分组类型。取值：
             * - custom：自建的应用分组。
             * - ehpc_cluster：从EHPC集群同步的应用分组。
             * - kubernetes：从容器服务Kubernetes版同步的应用分组。
             * @example `custom`
             */
            Type: string;
            /**
             * 通过智能标签创建应用分组的标签值。
             * @example `GroupValue1`
             */
            GroupFounderTagValue: string;
            /**
             * 从容器服务Kubernetes版同步过来的URL地址。
             * @example `https://aliyun.com`
             */
            BindUrl: string;
            /**
             * 应用分组名称。
             * @example `test123`
             */
            GroupName: string;
            /**
             * 应用分组ID。
             * @example `12345`
             */
            GroupId: number;
            /**
             * 阿里云服务ID。
             * @example `49****`
             */
            ServiceId: string;
            /**
             * 智能标签规则ID。
             * @example `6b882d9a-5117-42e2-9d0c-4749a0c6****`
             */
            DynamicTagRuleId: string;
            /**
             * 创建应用分组的时间戳。单位：毫秒。
             * @example `1603181891000`
             */
            GmtCreate: number;
            /**
             * 通过智能标签创建应用分组的标签键。
             * @example `GroupKey1`
             */
            GroupFounderTagKey: string;
            /**
             * 修改应用分组的时间戳。单位：毫秒。
             * @example `1603181891000`
             */
            GmtModified: number;
            ContactGroups: {
                /**
                 * 报警联系组。
                 */
                ContactGroup: {
                    /**
                     * 报警联系组名称。
                     * @example `CloudMonitor`
                     */
                    Name: string;
                }[];
            };
            Tags: {
                /**
                 * 应用分组绑定的标签列表。
                 */
                Tag: {
                    /**
                     * 应用分组的标签键。
                     * @example `tagKey1`
                     */
                    Key: string;
                    /**
                     * 应用分组的标签值。
                     * @example `tagValue1`
                     */
                    Value: string;
                }[];
            };
            TemplateIds: {
                /**
                 * 模板ID。
                 */
                TemplateId: string[];
            };
            /**
             * 资源ID。
             * @example `rg-aek2hopjh*******`
             */
            ResourceGroupId: string;
        }[];
    };
}
