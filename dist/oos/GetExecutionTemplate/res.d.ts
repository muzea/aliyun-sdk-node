export interface GetExecutionTemplateResponse {
    /**
     * 模板内容
     * @example `"{\n \"FormatVersion\": \"OOS-2019-06-01\",\n \"Parameters\": {\n \"Status\": {\n \"Type\": \"String\",\n \"Description\": \"(Required) The ID of the ECS instance.\"\n }\n },\n \"Tasks\": [\n {\n \"Name\": \"bar\",\n \"Properties\": {\n \"Parameters\": {\n \"Status\": \"{{ Status }}\"\n },\n \"API\": \"DescribeInstances\",\n \"Service\": \"Ecs\"\n },\n \"Action\": \"acs::ExecuteAPI\",\n \"Outputs\": {\n \"InstanceIds\", {\n \"ValueSelector\": \".Instances.Instance[].InstanceId\",\n \"Type\": \"List\"\n }\n }\n }\n ],\n \"Outputs\": {\n \"InstanceIds\": {\n \"Value\": \" {{ bar.InstanceIds }} \",\n \"Type\": \"List\"\n }\n }\n}\n"`
     */
    Content: string;
    /**
     * 请求ID
     * @example `14A60-EBE7-47CA-9757-12C1D47A`
     */
    RequestId: string;
    /**
     * 模板元信息
     */
    Template: {
        /**
         * 模板内容的SHA256
         * @example `4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4`
         */
        Hash: string;
        /**
         * 模板更新时间
         * @example `2019-05-16T10:26:14Z`
         */
        UpdatedDate: string;
        /**
         * 模板更新者
         * @example `root(13090000)`
         */
        UpdatedBy: string;
        /**
         * 标签键及值，键值对数量限制为1至20。
         * @example `{"k1":"k2","k2":"v2"}`
         */
        Tags: any;
        /**
         * 模板名称
         * @example `MyTemplate`
         */
        TemplateName: string;
        /**
         * 模板版本。以“v”+数字的形式，数字从1开始。
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 模板格式。系统字段判断，为JSON或YAML。
         * @example `JSON`
         */
        TemplateFormat: string;
        /**
         * 模板说明
         * @example `Descirbe instances of given status`
         */
        Description: string;
        /**
         * 模板创建者
         * @example `root(13090000)`
         */
        CreatedBy: string;
        /**
         * 模板创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreatedDate: string;
        /**
         * 模板ID
         * @example `t-94753d4d828d38`
         */
        TemplateId: string;
        /**
         * 模板共享类型。目前用户创建的模板的共享类型均为 **Private**。
         * @example `Private`
         */
        ShareType: string;
    };
}
