export interface DescribePropertyTypeScaItemResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B7A839E8-70AE-591D-8D9E-C5419A22****`
     */
    RequestId: string;
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的中间件类型信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的中间件类型信息的总数量。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 当前页面显示的中间件类型信息的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 返回的中间件类型集合。
     */
    PropertyTypeItems: {
        /**
         * 中间件的类型。取值：
         * - **system_service**：系统服务
         * - **software_library**：软件库
         * - **docker_component**：容器组件
         * - **database**：数据库
         * - **web_container**：Web容器
         * - **jar**：Jar包
         * - **web_framework**：Web框架
         * @example `docker_component`
         */
        Type: string;
        /**
         * 中间件的类型名称。
         * @example `Docker Component`
         */
        Name: string;
    }[];
}
