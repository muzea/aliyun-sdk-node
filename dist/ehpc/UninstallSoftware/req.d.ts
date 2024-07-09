export interface UninstallSoftwareRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 待卸载的软件名称。
     * 您可以通过调用[ListInstalledSoftware](~~188591~~)查询集群已安装的软件列表。
     * @example `ABYSS_2.1.5`
     */
    "Application": string;
}
