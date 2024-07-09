export interface UpdateOpsItemResponse {
    /**
     * 请求ID。
     * @example `C996DECB-3D2B-5321-B359-BE7031B6399E`
     */
    RequestId: string;
    /**
     * 运维项
     */
    OpsItem: {
        /**
         * 标签。
         * @example `{
              "k1": "v1",
              "k2": "v2"
        }
        `
         */
        Tags: any;
        /**
         * 更新时间。
         * @example `2023-03-16T08:04Z`
         */
        UpdateDate: string;
        /**
         * 描述。
         * @example `test-update`
         */
        Description: string;
        /**
         * 运维项ID。
         * @example `oi-e2264dcf040c472598e9`
         */
        OpsItemId: string;
        /**
         * 创建时间。
         * @example `2023-03-16T07:04Z`
         */
        CreateDate: string;
        /**
         * 运维项标题。
         * @example `Test`
         */
        Title: string;
        /**
         * 状态。
         * @example `Open`
         */
        Status: string;
        /**
         * 严重程度。
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
         */
        Solutions: string[];
        /**
         * 关联资源ARN列表。
         */
        Resources: string[];
        /**
         * 运维项属性信息。
         * @example `[{'Attribute': {'Weight': 100}, 'RealServer': 'uaejc8hnqzqz5valyh8dibolpvza48ik.yundunwaf5.com'}]`
         */
        Attributes: string;
        /**
         * 补丁基线创建者。
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
