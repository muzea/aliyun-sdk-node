export interface UpdateImageRequest {
    /**
     * 目标集群的ID。
     * @example `mse-8e8e9060`
     */
    "ClusterId": string;
    /**
     * 目标版本号。
     * > 需调用GetImage接口获取可升级的版本号MaxVersionCode。
     * @example `ZooKeeper_3_5_5`
     */
    "VersionCode": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
