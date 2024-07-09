export interface InstallSoftwareRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 需要安装的软件名称。
     * 您可以调用[ListSoftwares](~~87216~~)查询可安装的软件列表。
     * @example `ABYSS_2.1.5`
     */
    "Application": string;
}
