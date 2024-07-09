export interface AttachClassicLinkVpcRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 经典网络类型实例ID。您可以调用[DescribeInstances](~~25506~~)查看您可用的实例。
     * @example `i-bp1gtjxuuvwj17zr****`
     */
    "InstanceId": string;
    /**
     * 开启ClassicLink的VPC ID。您可以调用[DescribeVpcs](~~35739~~)查看您可用的VPC。
     * @example `vpc-bp1j4z1sr8zxu4l8u****`
     */
    "VpcId": string;
}
