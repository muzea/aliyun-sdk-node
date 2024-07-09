export interface GetResourcesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
    `
     */
    requestId: string;
    /**
     * 本次请求条件下的数据总量。List操作返回。
     * @example `20`
     */
    totalCount: number;
    /**
     * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。List操作返回。
     * @example `AAAAAdDWBF2****
    `
     */
    nextToken: string;
    /**
     * 本次请求所返回的最大记录条数。List操作返回。
     * @example `10`
     */
    maxResults: number;
    /**
     * 指定资源。Get操作返回。
     */
    resource: {
        /**
         * 资源属性（json格式）。
         * @example `{"Status":"Available","Description":"","AccountPrivilege":"RoleReadWrite","InstanceId":"r-8vbf5abe31c9c4d4","RegionId":"cn-zhangjiakou","AccountType":"Normal","TypeInfo":{},"AccountName":"cctest"}`
         */
        resourceAttributes: any;
        /**
         * 资源ID。
         * @example `cctest
        `
         */
        resourceId: string;
    };
    /**
     * 资源列表。List操作返回。
     */
    resources: {
        /**
         * 资源ID。
         * @example `cctest`
         */
        resourceId: string;
        /**
         * 资源属性（json格式）。
         * @example `{"Status":"Available","Description":"","AccountPrivilege":"RoleReadWrite","InstanceId":"r-8vbf5abe31c9c4d4","RegionId":"cn-zhangjiakou","AccountType":"Normal","TypeInfo":{},"AccountName":"cctest"}`
         */
        resourceAttributes: any;
    }[];
}
