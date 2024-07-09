export interface DescribeTagValuesRequest {
    /**
     * 当一个标签键对应多个标签值时，选择一次返回标签值的个数，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码，当一个标签键对应多个标签值时，选择返回的起始页。取值为大于0且不超过Integer数据类型的最大值，通常与PageSize搭配使用，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 系统服务规定参数，固定取值为：**ALIYUN::DTS::INSTANCE**。
     * @example `ALIYUN::DTS::INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * 数据迁移、同步或订阅的实例ID，可以通过调用[DescribeDtsJobs](~~209702~~)接口查询。
     * > 取值为空时，返回该用户下对应标签键的所有标签值。
     * @example `dtsl5o11f9029c****`
     */
    "ResourceId"?: string;
    /**
     * 标签键类型，取值：
     * - **Custom**：用户添加的标签键。
     * - **System**：系统创建的标签键。
     * > 当值为空时，默认返回所有的标签键。
     * @example `Custom`
     */
    "Category"?: string;
    /**
     * 标签的键值。
     * > 本参数为必填参数。
     * @example `owner`
     */
    "Key"?: string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
