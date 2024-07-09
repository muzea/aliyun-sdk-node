export interface UpdateOpsItemRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 运维项标题。
     * @example `Test`
     */
    "Title"?: string;
    /**
     * 运维项的描述。
     * @example `test-update`
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
     * @example `DASKJJLKADS-AHKLJHJSAKL-AJK`
     */
    "ClientToken"?: string;
    /**
     * 严重程度。
     * @example `Medium`
     */
    "Severity"?: string;
    /**
     * 来源业务。
     * @example `/aliyun/ecs`
     */
    "Source"?: string;
    /**
     * 分类。
     * @example `Security`
     */
    "Category"?: string;
    /**
     * 优先级。
     * @example `2`
     */
    "Priority"?: number;
    /**
     * 解决方案列表。
     * @example `[{\n    \"priority\":3,\n    \"type\":\"url\",\n    \"url\":\"https://example.com\",\n    \"description\":\"请对集群设置跨可用区高可用。\"\n}]`
     */
    "Solutions"?: string;
    /**
     * 去重字符串。
     * @example `ecs_instance_SystemMaintenance.Reboot`
     */
    "DedupString"?: string;
    /**
     * 关联资源ARN列表。
     * @example `[\"arn:acs:ecs:cn-heyuan:1139354755361920:instance/i-f8z928h7aqotd3o65032\"]`
     */
    "Resources"?: string;
    /**
     * 运维项ID，OpsItemId和Resources二参数必须填一个。
     * @example `oi-e2264dcf040c472598e9`
     */
    "OpsItemId"?: string;
    /**
     * 状态。
     * @example `Open`
     */
    "Status"?: string;
}
