export interface ModifyGovernanceKubernetesClusterRequest {
    /**
     * 集群所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `cd23228b3c80c4d4f9ad87cc3****`
     */
    "ClusterId": string;
    /**
     * 命名空间接入MSE服务治理的对应信息。
     */
    "NamespaceInfos"?: {
        /**
         * kubernetes命名空间名字。
         * @example `default`
         */
        Name: string;
        /**
         * 对应的微服务命名空间，为空代表没有接入。
         * @example `default`
         */
        MseNamespace: string;
    }[];
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
