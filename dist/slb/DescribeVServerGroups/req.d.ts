interface DescribeVServerGroupsRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1o94dp5i6earr9g6d1l`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 返回关联的转发规则信息。
    * 默认值：**false**。
    * @example `false`
    */ "IncludeRule"?: boolean;
    /**
    * 返回关联的监听信息。
    * 默认值：**false**。
    * @example `false`
    */ "IncludeListener"?: boolean;
}
export { DescribeVServerGroupsRequest };