export interface ListChainResponse {
    /**
     * 请求ID
     * @example `85A99B10-3926-5201-958E-C06FA47F****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 页码
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `1`
     */
    PageSize: number;
    /**
     * 总计交付链数目
     * @example `1`
     */
    TotalCount: number;
    /**
     * 交付链条目数组
     */
    Chains: {
        /**
         * 交付链修改时间
         * @example `1638259914000`
         */
        ModifiedTime: number;
        /**
         * 交付链作用域ID
         * @example `crr-nyrh2oko32xb****`
         */
        ScopeId: string;
        /**
         * 交付链描述
         * @example `description`
         */
        Description: string;
        /**
         * 交付链创建时间
         * @example `1638255427000`
         */
        CreateTime: number;
        /**
         * 交付链作用域类型
         * @example `REPOSITORY`
         */
        ScopeType: string;
        /**
         * 交付链ID
         * @example `chi-0ops0gsmw5x2****`
         */
        ChainId: string;
        /**
         * 实例ID
         * @example `cri-4cdrlqmhn4gm****`
         */
        InstanceId: string;
        /**
         * 交付链名称
         * @example `test`
         */
        Name: string;
        /**
         * 不被交付链执行的仓库集合
         */
        ScopeExclude: string[];
    }[];
}
