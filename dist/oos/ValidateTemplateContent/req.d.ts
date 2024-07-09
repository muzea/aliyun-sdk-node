export interface ValidateTemplateContentRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板内容
     * @example `{"FormatVersion": "OOS-2019-06-01", "Description": "Describe instances of given status", "Parameters": {"Status": {"Type": "String", "Description": "(Required) The status of the Ecs instance."}}, "Tasks": [{"Properties": {"Parameters": {"Status": "{{ Status }}"}, "API": "DescribeInstances", "Service": "Ecs"}, "Name": "foo", "Action": "ACS::ExecuteApi"}]}`
     */
    "Content"?: string;
    /**
     * 阿里云对象存储OSS中存放OOS模板内容的URL（只支持公共读的URL）。用户传入此字段可直接根据行TemplateURL中存储的模板内容创建执行任务，无需提前创建模板再创建执行任务（当用户选择已有的Template创建执行任务时不需传入此字段）。
     * @example `http:/oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-template.json`
     */
    "TemplateURL"?: string;
}
