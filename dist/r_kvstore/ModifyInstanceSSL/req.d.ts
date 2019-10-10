interface ModifyInstanceSSLRequest {
    "RegionId"?: string;
    /**
    * 修改SSL状态：
    * * Disable（关闭）
    * * Enable（开启）
    * * Update（更新证书）
    * @example `Enable`
    */ "SSLEnabled": string;
    "OwnerId"?: number;
    /**
    * 需要修改设置的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyInstanceSSLRequest };