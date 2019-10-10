interface DescribeSslVpnClientCertsRequest {
    /**
    * SSL-VPN客户端证书所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * SSL-VPN服务端ID。
    * @example `vss-bp18q7hzj6largv4v****`
    */ "SslVpnServerId"?: string;
    /**
    * SSL-VPN客户端证书ID。
    * @example `vsc-bp1n8wcf134yl0osr****`
    */ "SslVpnClientCertId"?: string;
    /**
    * SSL-VPN客户端证书的名称。
    * @example `cert1`
    */ "Name"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSslVpnClientCertsRequest };