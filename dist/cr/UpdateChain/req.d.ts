export interface UpdateChainRequest {
    /**
     * 实例ID
     * @example `cri-4cdrlqmhn4gm****`
     */
    "InstanceId": string;
    /**
     * 交付链ID
     * @example `chi-02ymhtwl3cq8****`
     */
    "ChainId": string;
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
    "ChainConfig": string;
    /**
     * 不被交付链执行的仓库集合
     */
    "ScopeExclude"?: string[];
}
