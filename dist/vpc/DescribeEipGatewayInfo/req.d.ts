interface DescribeEipGatewayInfoRequest {
    /**
    * EIP的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-zhangjiakou`
    */ "RegionId": string;
    /**
    * 绑定EIP的弹性网卡的实例ID。
    * @example `eni-bp1d66qjxb3qoin3xxxx`
    */ "InstanceId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
}
export { DescribeEipGatewayInfoRequest };