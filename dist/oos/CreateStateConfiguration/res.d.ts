export interface CreateStateConfigurationResponse {
    /**
     * 请求ID。
     * @example `1306108F-610C-40FD-AAD5-DA13E8B00BE9`
     */
    RequestId: string;
    /**
     * 终态配置。
     */
    StateConfiguration: {
        /**
         * 创建时间。
         * @example `2021-03-22T03:13:32Z`
         */
        CreateTime: string;
        /**
         * 目标资源。
         * @example `{     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }`
         */
        Targets: string;
        /**
         * 标签。
         * @example `{"Key": "oos", "Value": "inventory"}`
         */
        Tags: any;
        /**
         * 创建生成的配置ID。
         * @example `sc-a538febe18fabcdef`
         */
        StateConfigurationId: string;
        /**
         * 定时表达式。
         * @example `1 hour`
         */
        ScheduleExpression: string;
        /**
         * 模板名称。
         * @example `ACS-ECS-InventoryDataCollection`
         */
        TemplateName: string;
        /**
         * 模板版本。
         * @example `v1`
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
        Parameters: any;
        /**
         * 描述信息。
         * @example `collect inventory data`
         */
        Description: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 模板ID。
         * @example `t-1234asadf`
         */
        TemplateId: string;
    };
}
