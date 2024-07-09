export interface ListCloudAssetInstancesRequest {
    /**
     * 实例所在的地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 设置搜索资产的条件。该参数JSON格式，包含以下字段：
     * - **name**：检索项
     * - **value**：检索项值
     * - **logicalExp**：多个检索项值生效的逻辑关系。取值：
     *     - **OR**：表示多个检索项值之间是**或**的关系。
     *     - **AND**：表示多个检索项值之间是**与**的关系。
     * > 您可以调用[GetCloudAssetCriteria](~~GetCloudAssetCriteria~~)接口查询支持的搜索条件。
     * @example `[{\"name\":\"internetIp\",\"value\":\"192.168\",\"logicalExp\":\"OR\"}]`
     */
    "Criteria"?: string;
    /**
     * 设置多个搜索条件间生效的逻辑关系。取值：
     * - **OR**：表示多个搜索条件之间是**或**的关系。
     * - **AND**：表示多个搜索条件之间是**与**的关系。
     * @example `OR`
     */
    "LogicalExp"?: string;
    /**
     * 每页最多可显示的行数，最大值为100，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `2`
     */
    "CurrentPage"?: number;
    /**
     * 云资产实例的资产列表。
     */
    "CloudAssetTypes"?: {
        /**
         * 云资产的类型。
         * 具体含义参考接口[GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) AssetType。
         * @example `18`
         */
        AssetType: number;
        /**
         * 云产品的子类型。
         * 具体含义参考接口[GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) AssetSubType。
         * @example `0`
         */
        AssetSubType: number;
        /**
         * 服务器厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量级资产
         * @example `0`
         */
        Vendor: number;
    }[];
}
