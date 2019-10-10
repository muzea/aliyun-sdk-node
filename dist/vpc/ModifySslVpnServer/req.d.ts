interface ModifySslVpnServerRequest {
    /**
    * VPN网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * SSL-VPN服务端实例ID。
    * @example `vss-bp18q7hzj6largv4v****`
    */ "SslVpnServerId": string;
    "OwnerId"?: number;
    /**
    *
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * SSL-VPN服务端的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    * 客户端IP地址池。
    * @example `10.30.30.0/2`
    */ "ClientIpPool"?: string;
    /**
    * 本地客户端的网段。
    * @example `10.20.20.0/24`
    */ "LocalSubnet"?: string;
    /**
    * SSL-VPN服务端所使用的协议。
    * @example `UDP`
    */ "Proto"?: string;
    /**
    * SSL-VPN使用的加密算法。取值： **AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none**
    * @example `AES-128-CBC`
    */ "Cipher"?: string;
    /**
    * SSL-VPN服务端所使用的端口，默认值为**1194**。 不能用使用以下端口：
    * **22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500**
    * @example `1194`
    */ "Port"?: number;
    /**
    *  指定是否对通信进行压缩。 取值：**true（默认值） | false **
    * @example `false`
    */ "Compress"?: boolean;
}
export { ModifySslVpnServerRequest };