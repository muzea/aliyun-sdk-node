interface CreateRouteTableRequest {
    /**
    *  路由表所属的VPC的地域ID。
    *  您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 自定义路由表所属的VPC ID。
    * @example `vpc-bp1qpo0kug3a20qqe****`
    */ "VpcId": string;
    /**
    * 路由表的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `myRouteTable`
    */ "RouteTableName"?: string;
    /**
    * 路由表的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `路由表的名称`
    */ "Description"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CreateRouteTableRequest };