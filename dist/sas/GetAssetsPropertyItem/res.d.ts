export interface GetAssetsPropertyItemResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `340D7FC4-D575-1661-8ACD-CFA7BE57****`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的资产指纹聚合信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的资产指纹聚合信息的总数量。
         * @example `45`
         */
        TotalCount: number;
        /**
         * 当前页面显示的资产指纹聚合信息的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 资产指纹聚合信息集合。
     */
    PropertyItems: {
        /**
         * 资产指纹聚合项对应的服务器数量。
         * @example `23`
         */
        Count: number;
        /**
         * 启动项路径。
         * > 仅**Biz**取值为**autorun**时返回。
         * @example `C:/Program Files/****`
         */
        Path: string;
        /**
         * 模块名称。
         * > 仅**Biz**取值为**lkm**时返回。
         * @example `alihids`
         */
        ModuleName: string;
        /**
         * 域名。
         * > 仅**Biz**取值为**web_server**时返回。
         * @example `localhost`
         */
        Domain: string;
    }[];
}
