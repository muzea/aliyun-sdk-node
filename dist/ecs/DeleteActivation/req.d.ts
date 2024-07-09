export interface DeleteActivationRequest {
    /**
     * 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。
     * 您可以调用[DescribeRegions](~~25609~~)查看地域对应的ID等信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 未被使用的激活码ID。
     * @example `4ECEEE12-56F1-4FBC-9AB1-890F1234****`
     */
    "ActivationId": string;
}
