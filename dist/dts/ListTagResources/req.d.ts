export interface ListTagResourcesRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 资源类型定义，取值固定为：**ALIYUN::DTS::INSTANCE**。
     * @example `ALIYUN::DTS::INSTANCE`
     */
    "ResourceType": string;
    /**
     * 查询凭证。
     * > 如果一次查询没有返回全部结果，则可在后续查询中传入上一次查询返回的**NextToken**参数继续查询。
     * @example `212db86sca4384811e0b5e8707ec2****`
     */
    "NextToken"?: string;
    /**
     * 数据迁移、同步和订阅的实例ID，可以通过调用[DescribeDtsJobs](~~209702~~)。
     * > - N表示传入第几个实例ID。例如：ResourceId.1表示传入第一个实例ID；ResourceId.2表示传入第二个实例ID。可以同时查询1~50个实例ID。
     * - 该参数和**Tag.N.Key**参数至少传入一个。
     * @example `dtsntk10k6r12v****`
     */
    "ResourceId"?: string[];
    /**
     * 标签键对应的标签值。
     */
    "Tag"?: {
        /**
         * 标签键。
         * > - N表示传入第几个标签的键。例如：Tag.1.Key表示传入第一个标签的键；Tag.2.Key表示传入第二个标签的键。可以同时查询1~20个标签键。
         * - 该参数和**ResourceId.N**参数至少传入一个，且传入时不允许传入空字符串。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签的值。
         * > - N表示传入第几个标签的值。例如：Tag.1.Value表示传入第一个标签的值；Tag.2.Value表示传入第二个标签的值。可以同时查询1~20个标签值。
         * - 允许传入空字符串。
         * @example `testvalue1	`
         */
        Value: string;
    }[];
    "ResourceGroupId"?: string;
}
