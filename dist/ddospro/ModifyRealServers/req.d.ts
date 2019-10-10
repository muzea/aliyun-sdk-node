interface ModifyRealServersRequest {
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
    /**
    * 要操作的线路，取值：
    * - **BGP**：BGP线路
    * - **CT**：电信
    * - **CUT**：联通
    * - **MT**：移动
    * @example `CUT`
    */ "Line"?: string;
    "RealServers"?: string[];
}
export { ModifyRealServersRequest };