interface ModifyRouteTableAttributesRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 路由表的ID。
    * @example `vtb-bp145q7glnuzdvzu2****`
    */ "RouteTableId": string;
    /**
    * 路由表的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `doctest`
    */ "RouteTableName"?: string;
    /**
    * 路由表的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:/`/ 或`https://`开头。
    * @example `路由表的描述信息。`
    */ "Description"?: string;
    "OwnerId"?: number;
    "Bandwidth"?: string;
    "KbpsBandwidth"?: string;
    "ResourceBid"?: string;
    "ResourceUid"?: number;
}
export { ModifyRouteTableAttributesRequest };