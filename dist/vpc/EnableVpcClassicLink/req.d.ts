interface EnableVpcClassicLinkRequest {
    /**
    * 要开启ClassicLink的VPC所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou	`
    */ "RegionId": string;
    /**
    * VPC的ID。
    * @example `vpc-bp1m7v25emi1h5mtc****	`
    */ "VpcId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b	`
    */ "ClientToken"?: string;
}
export { EnableVpcClassicLinkRequest };