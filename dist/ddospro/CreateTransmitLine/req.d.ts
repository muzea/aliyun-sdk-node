interface CreateTransmitLineRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 回源类型，取值：
    * - **IP**：回源到Ip
    * - **DOMAIN**：回源到域名
    * @example `IP`
    */ "Type"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain"?: string;
    "Ips"?: string[];
    "RealServers"?: string[];
}
export { CreateTransmitLineRequest };