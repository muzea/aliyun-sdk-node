export interface GetAssetsPropertyDetailRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 要查询的资产指纹的类型，默认值为**sca**。取值：
     * - **lkm**：内核模块
     * - **autorun**：启动项
     * - **web_server**：Web站点
     * @example `lkm`
     */
    "Biz": string;
    /**
     * 要查询的资产指纹的聚合项名称。
     * > 调用[GetAssetsPropertyItem](~~GetAssetsPropertyItem~~)接口获取该参数。
     * @example `virtio`
     */
    "ItemName"?: string;
    /**
     * 指定要资产指纹详情查询的条件集合。
     */
    "SearchCriteriaList"?: {
        /**
         * 指定要查询的条件名称。取值如下：
         * - **remarkItemName**：资产指纹聚合项名称，支持模糊匹配
         * > - **Biz**取值为**web_server**时，**remarkItemName**表示搜索条件为域名
         * > - **Biz**取值为**lkm**时，**remarkItemName**表示搜索条件为模块名称
         * > - **Biz**取值为**autorun**时，**remarkItemName**表示搜索条件为自启动项路径
         * @example `remarkItemName`
         */
        Name: string;
        /**
         * 指定要查询的条件值。
         * @example `virtio`
         */
        Value: string;
    }[];
    /**
     * 服务器名称或IP。
     * @example `1.2.XX.XX`
     */
    "Remark"?: string;
    /**
     * 要查询的资产的UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `38f72ea4-4c9f-4df1-bc6c-0f267614****`
     */
    "Uuid"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
