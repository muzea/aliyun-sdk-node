interface DescribeGrantSagRulesRequest {
    /**
    * 智能接入网关实例所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关实例ID。
    * @example `sag-hdg*************`
    */ "SmartAGId": string;
    /**
    * 实例状态列表的页码，默认值是1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，默认值为10，最大值为50。
    * @example `10`
    */ "PageSize"?: number;
    "OwnerId"?: number;
}
export { DescribeGrantSagRulesRequest };