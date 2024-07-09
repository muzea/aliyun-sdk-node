export interface RollbackSuspEventQuaraFileRequest {
    /**
     * 访问源IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 隔离文件ID。
     * > 如果不输入该参数，调用RollbackSuspEventQuaraFile接口不会取消对文件隔离箱中文件的隔离，即调用该接口不生效。调用[DescribeSuspEventQuaraFiles](~~DescribeSuspEventQuaraFiles~~)接口可获取隔离文件ID（Id参数的值）。
     * @example `3921797`
     */
    "QuaraFileId"?: number;
    /**
     * 请求来源标识，固定为sas。
     * @example `sas`
     */
    "From"?: string;
}
