interface ModifySslVpnClientCertRequest {
    /**
    * SSL-VPN客户端证书所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  SSL-VPN客户端证书的ID。
    * @example `vsc-bp1n8wcf134yl0osrc****`
    */ "SslVpnClientCertId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * SSL-VPN客户端证书的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `cert2`
    */ "Name"?: string;
}
export { ModifySslVpnClientCertRequest };