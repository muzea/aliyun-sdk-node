export interface DescribePropertyScaItemResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3F4236AB-7070-538D-85EB-98EBFE6C****`
     */
    RequestId: string;
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的资产指纹调查中间件信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的资产指纹调查中间件信息的总数量。
         * @example `27`
         */
        TotalCount: number;
        /**
         * 当前页面显示的资产指纹调查中间件信息的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 资产指纹调查中间件信息集合。
     */
    PropertyItems: {
        /**
         * 中间件类型展示名称。
         * @example `Docker Component`
         */
        TypeDisplay: string;
        /**
         * 中间件名称。
         * @example `kubelet`
         */
        Name: string;
        /**
         * 中间件对应的服务器数量。
         * @example `23`
         */
        Count: number;
        /**
         * 中间件、数据库或Web服务的类型。取值：
         * - **system_service**：系统服务
         * - **software_library**：软件库
         * - **docker_component**：容器组件
         * - **database**：数据库
         * - **web_container**：Web容器
         * - **jar**：Jar包
         * - **web_framework**：Web框架
         * @example `docker_component`
         */
        BizType: string;
    }[];
}
