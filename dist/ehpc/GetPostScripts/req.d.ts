export interface GetPostScriptsRequest {
    /**
     * 集群所属的地域ID。
     * 您可以调用[ListRegions](~~188593~~)查看最新的阿里云地域列表。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-sh-EnjshUxn`
     */
    "ClusterId": string;
}
