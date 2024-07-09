export interface ListTagResourcesRequest {
    /**
     * 地域ID。取值：
     * - 对于中心化部署的云服务，您需要参照[标签支持的中心化云服务的对应地域](~~2579691~~)填写资源对应的地域ID。
     * - 对于非中心化部署的云服务，您需要填写资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 最大值：1000。默认值：50。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 标签键和标签值，键值对取值范围：1~10。
     * 如果指定多个标签，则会查询同时绑定了该多个标签的资源。
     * 约束如下：
     * - 标签键取值范围：1~128个字符。
     * - 标签值取值范围：1~128个字符。
     * - 区分大小写。
     * - 同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
     * @example `{"k1":"v1","k2":"v2"}`
     */
    "Tags"?: string;
    /**
     * 标签类型。取值：
     * - Custom：自定义标签。
     * - System：系统标签。
     * - All：全部标签。
     * 默认值：All。
     * @example `Custom`
     */
    "Category"?: string;
    /**
     * 资源ARN（Aliyun Resource Name）。
     * @example `arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****`
     */
    "ResourceARN"?: string[];
}
