export interface ListStateConfigurationsResponse {
    /**
     * 请求ID。
     * @example `1306108F-610C-40FD-AAD5-DA13E8B00BE9`
     */
    RequestId: string;
    /**
     * 终态配置列表。
     */
    StateConfigurations: {
        /**
         * 配置更新时间。
         * @example `2021-04-22T03:13:32Z`
         */
        UpdateTime: string;
        /**
         * 创建时间。
         * @example `2021-03-22T03:13:32Z`
         */
        CreateTime: string;
        /**
         * 目标资源。
         * @example `{ "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }`
         */
        Targets: string;
        /**
         * 标签。
         * @example `{"Key": "oos", "Value": "inventory"}`
         */
        Tags: any;
        /**
         * 终态配置ID。
         * @example `sc-a538febe18fabcdef`
         */
        StateConfigurationId: string;
        /**
         * 定时表达式。
         * @example `1 hour`
         */
        ScheduleExpression: string;
        /**
         * 模版名称。
         * @example `ACS-ECS-InventoryDataCollection`
         */
        TemplateName: string;
        /**
         * 模版版本。
         * @example `v2`
         */
        TemplateVersion: string;
        /**
         * 配置模式。
         * @example `ApplyAndAutoCorrect`
         */
        ConfigureMode: string;
        /**
         * 定时类型。
         * @example `rate`
         */
        ScheduleType: string;
        /**
         * 参数。
         * @example `{"policy": {"ACS:Network": {"Collection": "Enabled"}, "ACS:Application": {"Collection": "Enabled"}}}`
         */
        Parameters: string;
        /**
         * 描述内容。
         * @example ` inventory数据收集`
         */
        Description: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 模版ID。
         * @example `t-ajshjalscfhjk2214`
         */
        TemplateId: string;
    }[];
    /**
     * 下一页token。
     * @example `AAAAASO3cL82+b5iji7bfPNpMh8=`
     */
    NextToken: string;
}
