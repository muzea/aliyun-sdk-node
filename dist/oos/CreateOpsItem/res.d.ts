export interface CreateOpsItemResponse {
    /**
     * 请求ID。
     * @example `DA4F08D4-DA54-5407-84B9-108C71D75B17`
     */
    RequestId: string;
    /**
     * 运维项。
     */
    OpsItem: {
        /**
         * 标签。
         * @example `{"k1": "v1"}`
         */
        Tags: any;
        /**
         * 更新时间。
         * @example `2023-03-24T03:55Z`
         */
        UpdateDate: string;
        /**
         * 描述信息。
         * @example `OpsItem`
         */
        Description: string;
        /**
         * 运维项ID。
         * @example `oi-dba9c6eec9254a4d87c1`
         */
        OpsItemId: string;
        /**
         * 创建时间。
         * @example `2023-03-24T03:55Z`
         */
        CreateDate: string;
        /**
         * 运维项标题。
         * @example `ECS reboot is scheduled`
         */
        Title: string;
        /**
         * 状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 严重性级别。
         * @example `Medium`
         */
        Severity: string;
        /**
         * 分类。
         * @example `Security`
         */
        Category: string;
        /**
         * 来源业务。
         * @example `/aliyun/ecs`
         */
        Source: string;
        /**
         * 优先级。
         * @example `2`
         */
        Priority: number;
        /**
         * 解决方案列表。
         * @example `[{\n    \"priority\":3,\n    \"type\":\"url\",\n    \"url\":\"https://example.com\",\n    \"description\":\"请对集群设置跨可用区高可用。\"\n}]`
         */
        Solutions: string;
        /**
         * 关联资源ARN列表。
         * @example `[\"acs:oos:cn-hangzhou:1563457855438522:application/dingTest/applicationgroup/fltest\"]`
         */
        Resources: string;
        /**
         * 运维项属性信息。
         * @example `{\"regionId\":\"cn-zhangjiakou\",\"appId\":\"992BKO1X75GRQ4E8\",\"instanceId\":\"i-8vbcymxagqsyyyjppbr4\",\"instance_name\":\"cdae\"}`
         */
        Attributes: string;
        /**
         * 运维项创建者。
         * @example `root(130900000)
        `
         */
        CreatedBy: string;
        /**
         * 运维项修改者。
         * @example `root(130900000)
        `
         */
        LastModifiedBy: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
    };
}
