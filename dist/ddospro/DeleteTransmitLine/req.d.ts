interface DeleteTransmitLineRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 要删除的线路，取值：
    * - **BGP**：bgp线路
    * - **CT**：电信
    * - **CUT**：联通
    * - **MT**：移动
    * @example `CUT`
    */ "Line"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain"?: string;
}
export { DeleteTransmitLineRequest };