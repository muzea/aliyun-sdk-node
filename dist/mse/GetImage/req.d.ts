export interface GetImageRequest {
    /**
     * 当前集群所在的版本号。
     * @example `ZooKeeper_3_5_5`
     */
    "VersionCode": string;
    /**
     * 返回信息的语言类型。
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
