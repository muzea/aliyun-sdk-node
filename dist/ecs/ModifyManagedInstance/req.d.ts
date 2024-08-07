export interface ModifyManagedInstanceRequest {
    /**
     * 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。
     * 您可以调用[DescribeRegions](~~25609~~)查看地域对应的ID等信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 托管实例的ID。
     * @example `mi-hz01nmcf****`
     */
    "InstanceId": string;
    /**
     * 托管实例的名称。支持2~128个字符，且必须以字母开头，不能以特殊字符及数字开头。只可包含特殊字符中的半角句号（.）、下划线（_）、短划线（-）和半角冒号（:），不可以使用`http://`或`https://`开头。
     * @example `testInstanceName`
     */
    "InstanceName": string;
}
