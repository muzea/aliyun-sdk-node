export interface CreateTemplateRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符，且不能以ALIYUN、ACS、ALIBABA、ALICLOUD开头。
     * @example `MyTemplate`
     */
    "TemplateName": string;
    /**
     * 模板内容。JSON或YAML格式，长度限制为 64 KB。
     * @example `{"FormatVersion": "OOS-2019-06-01", "Description": "Describe instances of given status", "Parameters": {"Status": {"Type": "String", "Description": "(Required) The status of the Ecs instance."}}, "Tasks": [{"Properties": {"Parameters": {"Status": "{{ Status }}"}, "API": "DescribeInstances", "Service": "Ecs"}, "Name": "foo", "Action": "ACS::ExecuteApi"}]}`
     */
    "Content": string;
    /**
     * 标签键和值列表， 标签键值对数量范围是1至20。
     * @example `{"k1":"v1","k2":"v2"}`
     */
    "Tags"?: any;
    /**
     * 版本名称。
     * @example `v2`
     */
    "VersionName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
