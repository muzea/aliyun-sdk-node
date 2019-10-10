interface CreateVpcRequest {
    /**
    * VPC所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    *  VPC的网段。您可以使用以下网段或其子集：
    *
    * * 10.0.0.0/8。
    * * 172.16.0.0/12（默认值）。
    * * 192.168.0.0/16。
    * @example `172.16.0.0/12`
    */ "CidrBlock"?: string;
    /**
    * VPC的IPv6网段。
    * @example `2408:4004:0:6axx::/56`
    */ "Ipv6CidrBlock"?: string;
    /**
    * 是否开启IPv6网段，取值：
    * - **false**（默认值）：不开启。
    *
    * - **true**：开启。
    * @example `false`
    */ "EnableIpv6"?: boolean;
    /**
    * VPC的名称。长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或`https://`开头。
    * @example `vpc-hp3ld1aq7kl4k7skh****`
    */ "VpcName"?: string;
    /**
    * VPC的描述信息。长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `This is my first Vpc.`
    */ "Description"?: string;
    /**
    * 资源组ID。
    * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
    * @example `rg-acfmxazb4ph6aiy****`
    */ "ResourceGroupId"?: string;
    "DryRun"?: boolean;
    /**
    * 用户侧网络的网段，如需定义多个网段请使用半角逗号隔开，最多支持3个网段。
    * VPC定义的默认私网转发网段为10.0.0.0/8、172.16.0.0/12、192.168.0.0/16、100.64.0.0/10和VPC CIDR网段。如果ECS实例或弹性网卡已经具备了公网访问能力（ECS实例分配了固定公网IP、ECS实例或弹性网卡绑定了公网IP、ECS实例或弹性网卡设置了DNAT IP映射规则），这类资源访问非上述默认私网转发网段的请求均会通过公网IP直接转发至公网。当希望按照路由表在私网（如VPC内、通过VPN/高速通道/云企业网搭建的混合云网络）转发访问非上述默认私网网段的请求时，需要将网络请求的目的网段设置为ECS或弹性网卡所在VPC的UserCidr。为VPC设置UserCidr后，该VPC中访问UserCidr地址的请求将按照路由表进行转发，而不通过公网IP转发。
    * @example `189.16.0.0/12`
    */ "UserCidr"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `sha223ndd2333`
    */ "ClientToken"?: string;
}
export { CreateVpcRequest };