export interface CreateChainRequest {
    /**
     * 实例ID
     * @example `cri-4cdrlqmhn4gm****`
     */
    "InstanceId": string;
    /**
     * 仓库名称
     * @example `repo1`
     */
    "RepoName"?: string;
    /**
     * 命名空间名称
     * @example `ns1`
     */
    "RepoNamespaceName"?: string;
    /**
     * 交付链名称
     * @example `test`
     */
    "Name": string;
    /**
     * 交付链描述
     * @example `description`
     */
    "Description"?: string;
    /**
     * JSON化交付链描述的实体对象
     * @example `chainconfig`
     */
    "ChainConfig"?: string;
    /**
     * 不被交付链执行的仓库集合
     */
    "ScopeExclude"?: string[];
}
