interface CreateVpnGatewayRequest {
    /**
    *  VPN网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  VPN网关所属的VPC ID。
    * @example `vpc-bp1ub1yt9cvakoelj****`
    */ "VpcId": string;
    /**
    * VPN网关的公网带宽，单位Mbps。
    * 取值：**5|10|20|50|100**。
    * @example `5`
    */ "Bandwidth": number;
    "OwnerId"?: number;
    /**
    * VPN网关的名称，默认值为VPN网关的ID。
    * 长度为2~100个英文或中文字符，必须以大小字母或中文开头，可包含数字、下划线（_）和短横线（-），不能以`http://`或`https://`开头。
    * @example `MYVPN`
    */ "Name"?: string;
    /**
    * **PREPAY**：包年包月。
    * @example `PREPAY`
    */ "InstanceChargeType"?: string;
    /**
    * 购买时长，取值：**1~9|12|24|36**。
    * >**InstanceChargeType**参数的值为**PREPAY**时，该参数必选。
    * @example `1`
    */ "Period"?: number;
    /**
    * 是否自动支付VPN网关的账单，取值：
    * - **true**：自动支付VPN网关的账单。
    * - **false**(默认值) ：不自动支付VPN网关的账单。
    * @example `false`
    */ "AutoPay"?: boolean;
    /**
    * 是否开启IPsec-VPN功能。IPsec-VPN功能提供站点到站点的连接。您可以通过创建IPsec隧道将本地数据中心网络和专有网络或两个专有网络安全地连接起来。取值：
    * - **true**(默认值)：开启IPsec-VPN功能。
    * - **false**：不开启IPsec-VPN功能。
    * @example `true`
    */ "EnableIpsec"?: boolean;
    /**
    * 开启SSL-VPN功能。提供点到站点的VPN连接，不需要配置客户网关，终端直接接入。取值：
    * - **true**：开启SSL-VPN功能。
    * - **false**(默认值) ：不开启SSL-VPN功能。
    * @example `true`
    */ "EnableSsl"?: boolean;
    /**
    * 允许同时连接的最大客户端数量。
    * @example `2`
    */ "SslConnections"?: number;
    "VSwitchId"?: string;
}
export { CreateVpnGatewayRequest };