export interface GetLindormInstanceListRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~426062~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例名称关键字，可根据该关键字模糊搜索。
     * @example `test`
     */
    "QueryStr"?: string;
    /**
     * 指定要查询的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 实例类型，取值：
     * - **lindorm**：表示Lindorm单可用区实例。
     * - **lindorm_multizone**：表示Lindorm多可用区实例。
     * - **serverless_lindorm**：表示Lindorm Serverless实例。
     * - **lindorm_standalone**：表示Lindorm单节点实例。
     * - **lts**：表示Lindorm数据通道服务类型。
     * @example `lindorm`
     */
    "ServiceType"?: string;
    /**
     * 查询的实例支持的数据引擎类型，取值：
     * - **1**：支持搜索引擎。
     * - **2**：支持时序引擎。
     * - **4**：支持宽表引擎。
     * - **8**：支持文件引擎。
     * > 例如：SupportEngine取值为15，15=8+4+2+1，表示该实例支持搜索引擎、时序引擎、宽表引擎和文件引擎。SupportEngine取值为6，6=4+2，表示该实例支持时序引擎和宽表引擎。
     * @example `15`
     */
    "SupportEngine"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签的键。N的取值范围：1~20。
         * > 可以传入多个标签的键。例如：第一对中的Key表示传入第一个标签的键。第二对中的Key表示传入第二个标签的键。
         * @example `test`
         */
        Key: string;
        /**
         * 标签的值。N的取值范围：1~20。
         * > 可以传入多个标签的值。例如：第一对中的Value表示传入第一个标签的值。第二对中的Value表示传入第二个标签的值。
         * @example `2.2.18`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-aek3b63arvg27vi`
     */
    "ResourceGroupId"?: string;
}
