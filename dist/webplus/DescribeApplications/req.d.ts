export interface DescribeApplicationsRequest {
    /**
     * 应用ID，查询特定应用信息
     * @example `wa-5d1af9c802470221ab7*****`
     */
    "AppId"?: string;
    /**
     * 查询页面大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页面数
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 应用名称，查询此名称的应用
     * @example `appTest`
     */
    "AppName"?: string;
    /**
     * 查询的应用名关键字，若应用名称包含此关键字，则返回此应用的关键字
     * @example `appSearch`
     */
    "AppSearch"?: string;
    /**
     * 搜索应用中环境名的关键字，若应用中的环境名包含此关键字，则返回此应用
     * @example `testEnv`
     */
    "EnvSearch"?: string;
    /**
     * 栈类型搜索
     * @example `Java`
     */
    "StackSearch"?: string;
    /**
     * 技术栈分类
     * @example `Java`
     */
    "CategorySearch"?: string;
    "RegionId"?: string;
}
