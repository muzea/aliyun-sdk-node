export interface GenerateExecutionPolicyRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称
     * @example `vmeixme`
     */
    "TemplateName"?: string;
    /**
     * 模版版本，默认为最新版。
     * @example `v2`
     */
    "TemplateVersion"?: string;
    /**
     * RAM角色
     * @example `AliyunServiceRoleForOOSBandwidthScheduler`
     */
    "RamRole"?: string;
    /**
     * 模板内容，JSON或YAML格式。用户传入此字段可检查模板内容中需要的权限策略。
     * @example `{   "Description": "Example template, describe instances in some status",   "FormatVersion": "OOS-2019-06-01",   "Parameters": {},   "Tasks": [     {       "Name": "describeInstances",       "Action": "ACS::ExecuteAPI",       "Description": "desc-en",       "Properties": {         "Service": "ECS",         "API": "DescribeInstances",         "Parameters": {           "Status": "Running"         }       }     }   ] }`
     */
    "TemplateContent"?: string;
}
