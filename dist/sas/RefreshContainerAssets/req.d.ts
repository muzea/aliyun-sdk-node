export interface RefreshContainerAssetsRequest {
    /**
     * 指定要刷新的容器资产类型。取值：
     * - **IMAGE**：容器镜像。
     * - **CONTAINER**：容器。
     * @example `IMAGE`
     */
    "AssetType": string;
}
