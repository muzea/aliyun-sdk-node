interface DescribeACLAttributeRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制ID。
    * @example `acl-ohlexqptfhy******`
    */ "AclId": string;
    "OwnerId"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 列表的页码，默认值为1。
    * @example `2`
    */ "PageNumber"?: number;
    /**
    * 规则方向。
    * 取值：**in|out**
    * @example `test`
    */ "Direction"?: string;
    /**
    * 订单号。
    * @example `1255444444`
    */ "Order"?: string;
}
export { DescribeACLAttributeRequest };