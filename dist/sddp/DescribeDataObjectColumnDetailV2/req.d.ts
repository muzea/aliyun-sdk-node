export interface DescribeDataObjectColumnDetailV2Request {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，设置当前页的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 数据对象所属的产品名称对应的ID。取值：
     * - **1**：MaxCompute
     * - **2**：OSS
     * - **3**：ADB-MYSQL
     * - **4**：TableStore
     * - **5**：RDS
     * - **6**：SELF_DB
     * - **7**：PolarDB-X
     * - **8**：PolarDB
     * - **9**：ADB-PG
     * - **10**：OceanBase
     * - **11**：MongoDB
     * - **25**：Redis
     * @example `5`
     */
    "ProductId"?: number;
    /**
     * 设置要查询的数据对象的唯一标识ID。
     * > 您可以通过调用[DescribeDataObjects](~~2399253~~)获取标识ID。
     * @example `13456723343`
     */
    "Id": string;
    /**
     * 行业模版ID。
     * > 您可以通过调用[DescribeDataObjects](~~2399253~~)获取行业模板标识ID。
     * @example `1`
     */
    "TemplateId": number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
