export interface PublicSyncAndCreateImageScanTaskRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.X.X`
     */
    "SourceIp"?: string;
    /**
     * 要导入资产中心的镜像的信息。该参数为JSON格式，包含以下字段：
     * - **RegistryType**：镜像仓的类型。取值：
     *     - acr
     *     - harbor
     *     - quay
     * - **RepoId**：镜像仓的ID。
     * - **InstanceId**：ACR镜像仓实例的ID。
     * - **RepoNamespace**：镜像仓的命名空间。
     * - **RegionId**：镜像的地域ID。
     * - **RepoName**：镜像仓的名称。
     * - **Digest**：镜像的摘要。
     * - **Tag**：镜像的标签。
     * - **CreateTime**：镜像创建的时间戳，单位为毫秒。
     * - **UpdateTime**：镜像更新的时间戳，单位为毫秒。
     * @example `[{"registryType":"acr","repoId":"crr-red9kgqqi0fh75d5","instanceId":"cri-1x2qtjd75ofqvfa8","repoNamespace":"1125","regionId":"cn-hangzhou","repoName":"script1","digest":"b1064a5007786b6f82a50772858e8156bc1e5fbddb7dd20af6922761ad197fe4","tag":"v0113-ver2","createTime":1641267666666,"updateTime":1641267909090}]`
     */
    "Images": string;
}
