interface CreateSslVpnServerRequest {
    /**
    * VPN网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  VPN网关的ID。
    * @example `vpn-bp1hgim8by0kc9nga5lg3`
    */ "VpnGatewayId": string;
    /**
    * 是给客户端虚拟网卡分配访问地址的的地址段，不是指客户端已有的内网网段。
    * 当客户端通过SSL-VPN连接访问本端时，VPN网关会从指定的客户端网段中分配一个IP地址给客户端使用。
    * 该网段不能与**LocalSubnet**地址段冲突。
    * @example `192.168.1.0/24`
    */ "ClientIpPool": string;
    /**
    * 是客户端通过SSL-VPN连接要访问的地址段。
    * 本端网段可以是VPC的网段、交换机的网段、通过专线和VPC互连的IDC的网段、云服务如RDS/OSS等的网段。
    * @example `10.0.0.0/8`
    */ "LocalSubnet": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * SSL-VPN服务端的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
    * 但不能以`http://` 或`https://`开头。
    * @example `sslvpnname`
    */ "Name"?: string;
    /**
    * SSL-VPN服务端所使用的协议。
    * 取值：**UDP（默认值） | TCP**
    * @example `UDP`
    */ "Proto"?: string;
    /**
    * SSL-VPN使用的加密算法。取值：
    * ** AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none **
    * @example `AES-128-CBC`
    */ "Cipher"?: string;
    /**
    *  SSL-VPN服务端所使用的端口，默认值为1194。 不能用使用以下端口:
    * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
    * @example `1194`
    */ "Port"?: number;
    /**
    * 是否压缩。
    * @example `false`
    */ "Compress"?: boolean;
}
export { CreateSslVpnServerRequest };