export interface DescribeTagKeysRequest {
    /**
     * 当标签值过多时，选择一次返回的个数，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，通常与PageSize搭配使用，默认值为1。
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
     * @example `dtsl5o11f9029c****`
     */
    "ResourceId"?: string;
    /**
     * 标签类型，取值：
     * - **System**：系统创建的标签。
     * - **Custom**：用户添加的标签。
     * > 当值为空时，默认返回可公示的标签。
     * @example `Custom`
     */
    "Category"?: string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
