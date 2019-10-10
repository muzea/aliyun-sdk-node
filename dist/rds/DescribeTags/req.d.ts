interface DescribeTagsRequest {
    /**
    * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 代理模式ID。
    * @example `API`
    */ "proxyId"?: string;
    /**
    * 实例ID。
    * >传入该参数，其他过滤条件失效。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId"?: string;
    /**
    * 需要查询的标签，包括TagKey和TagValue。格式：{“key1”:”value1”}。
    * @example `{“key1”:”value1”}`
    */ "Tags"?: string;
}
export { DescribeTagsRequest };