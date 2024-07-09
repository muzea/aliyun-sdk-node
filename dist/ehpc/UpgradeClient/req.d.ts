export interface UpgradeClientRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * ehpcutil将升级到的版本，默认升级到最新版本。您可以调用[ListCurrentClientVersion](~~87223~~)查询ehpcutil最新版本号。
     * @example `2.0.0`
     */
    "ClientVersion"?: string;
}
