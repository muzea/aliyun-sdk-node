export interface CreateOpsItemRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 运维项标题。
     * @example `ECS reboot is scheduled`
     */
    "Title": string;
    /**
     * 操作的描述信息。
     * @example `OpsItem`
     */
    "Description"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     * @example `{
          "k1": "v1",
          "k2": "v2"
    }`
     */
    "Tags"?: any;
    /**
     * 幂等Token。
     * @example `123e56767-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 严重程度。
     * @example `Medium`
     */
    "Severity": string;
    /**
     * 来源业务。
     * @example `/aliyun/ecs`
     */
    "Source": string;
    /**
     * 分类。
     * @example `Security`
     */
    "Category": string;
    /**
     * 优先级。取值范围1-5，1为最高优先级。
     * @example `4`
     */
    "Priority"?: number;
    /**
     * 解决方案列表。
     * @example `[{\n    \"priority\":3,\n    \"type\":\"SingleAZEcs\",\n    \"url\":\"http://ecs.consle.aliyuncs.com\",\n    \"description\":\"请创建不同可用区的ECS实例，并导入到应用分组中\"\n}]`
     */
    "Solutions"?: string;
    /**
     * 去重字符串。
     * @example `ecs_instance_SystemMaintenance.Reboot`
     */
    "DedupString"?: string;
    /**
     * 关联资源ARN列表。
     * @example `[\"acs:oos:cn-hangzhou:1563457855438522:application/test-33333/applicationgroup/default-cn-hangzhou-1\"]`
     */
    "Resources"?: string;
}
