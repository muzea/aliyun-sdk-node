export interface DescribeOfflineMachinesRequest {
    /**
     * 访问源的IP地址。
     * @example `180.113.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置分页查询时，每页显示的备份文件的数量。默认值为**5**，表示每页显示5条备份文件。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `4`
     */
    "CurrentPage"?: number;
    /**
     * 服务器所在的地域。
     * > 您可以调用[DescribeCriteria](~~DescribeCriteria~~)接口通过**Name**为**regionId**的项的**Values**来获取支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionNo"?: string;
    /**
     * 操作系统。
     * > 您可以调用[DescribeCriteria](~~DescribeCriteria~~)接口通过**Name**为**osType**的项的**Values**来获取支持的操作系统。
     * @example `linux`
     */
    "Os"?: string;
    /**
     * 要查询的资产信息，可以设置为资产名称、公网IP。
     * @example `172.20.XX.XX`
     */
    "Remark"?: string;
    /**
     * 服务器厂商。取值：
     * - **0**：阿里云资产
     * - **1**：云外资产
     * - **2**：IDC资产
     * - **3**、**4**、**5**、**7**：其它云资产
     * - **8**：轻量级资产
     * @example `0`
     */
    "Vendor"?: number;
    /**
     * 服务器所在的地域。
     * > 您可以调用[DescribeCriteria](~~DescribeCriteria~~)接口通过**Name**为**regionId**的项的**Values**来获取支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionIdStr"?: string;
}
