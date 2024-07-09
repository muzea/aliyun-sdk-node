export interface TagResourcesRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 资源类型定义，固定取值为：**ALIYUN::DTS::INSTANCE**。
     * @example `ALIYUN::DTS::INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * 数据迁移、同步和订阅的实例ID，可以通过调用[DescribeDtsJobs](~~209702~~)接口查询。
     * > N表示传入第几个实例ID。例如ResourceId.1表示传入第一个实例ID；ResourceId.2表示传入第二个实例ID。
     * @example `dtsntk10k6r12v****`
     */
    "ResourceId": string[];
    /**
     * 要绑定的标签（键值对）列表。
     */
    "Tag": {
        /**
         * 标签的键。
         * > - N表示传入第几个标签的键。例如Tag.1.Key表示传入第一个标签的键；Tag.2.Key表示传入第二个标签的键。
         * - 不允许传入空字符串。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签的值。
         * > - N表示传入第几个标签的值。例如Tag.1.Value表示传入第一个标签的值；Tag.2.Value表示传入第二个标签的值。
         * - 允许传入空字符串。
         * @example `testvalue1`
         */
        Value: string;
    }[];
}
