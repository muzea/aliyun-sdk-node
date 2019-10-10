interface CreateBandwidthPackageRequest {
    /**
    *  NAT带宽包所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT网关的ID。
    * @example `ngw-7mwb327j1`
    */ "NatGatewayId": string;
    /**
    * NAT带宽包中的公网IP数量，取值范围：1-50
    * @example `2`
    */ "IpCount": number;
    /**
    * NAT带宽包的带宽。
    * 取值范围：5-1000
    * @example `5`
    */ "Bandwidth": number;
    "OwnerId"?: number;
    /**
    *  NAT带宽包的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `带宽包名称`
    */ "Name"?: string;
    /**
    *  NAT带宽包的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `带宽包描述`
    */ "Description"?: string;
    /**
    *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `she11234556664566`
    */ "ClientToken"?: string;
    /**
    * 目前只支持一种：BGP。
    * @example `BGP`
    */ "ISP"?: string;
    /**
    * NAT带宽包位于的可用区。
    * 不指定该参数时，系统将随机分配一个可用区。
    * > NAT带宽包上的IP与后端ECS不处于同一个可用区，并不影响其连通性；但是位于相同可用区时，可减小延迟。
    * @example `cn-shanghai-a`
    */ "Zone"?: string;
    /**
    * 网络计费类型，取值：
    * - PayByTraffic：按流量计费
    * - PayByBandwidth：按带宽计费
    * @example `PayByBandwidth`
    */ "InternetChargeType"?: string;
}
export { CreateBandwidthPackageRequest };