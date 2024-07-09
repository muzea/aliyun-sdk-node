export interface DescribeEaisRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/364379.html)查看最新的阿里云地域列表。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * EAIS实例ID。取值可以由多个实例ID组成一个JSON数组，ID之间用半角逗号（,）隔开。最多支持200个ID。
     * @example `["eais-id1", "eais-id2"]`
     */
    "ElasticAcceleratedInstanceIds"?: string;
    /**
     * EAIS实例名称，支持使用通配符*进行模糊搜索。
     * @example `eais*`
     */
    "InstanceName"?: string;
    /**
     * EAIS实例状态。具体状态与创建EAIS实例的方式有关，说明如下：
     * - 调用[CreateEaisEi](~~2618548~~)创建EAIS实例：
     *   - Pending：准备中
     *   - Creating：创建中
     *   - Bindable：可绑定
     *   - Bound：已绑定
     *   - InUse：使用中
     * - 调用[CreateEai](~~2618555~~)创建EAIS实例：
     *   - Starting：创建中
     *   - Available：可绑定
     *   - Attaching：绑定中
     *   - InUse：已绑定
     *   - Detaching：解绑中
     * @example `InUse`
     */
    "Status"?: string;
    /**
     * EAIS实例规格。取值范围：
     * - eais.ei-a6.4xlarge
     * - eais.ei-a6.2xlarge
     * - eais.ei-a6.xlarge
     * - eais.ei-a6.large
     * @example `eais.ei-a6.2xlarge`
     */
    "InstanceType"?: string;
    /**
     * 绑定的ECS或ECI实例ID。
     * @example `i-wz96zm231cua8hbv****`
     */
    "ClientInstanceId"?: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 实例的标签键。N的取值范围为1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 查询接口返回信息列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页展示响应信息时设置的每页行数，单位：行。
     * 最大值：200。
     * 默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
}
