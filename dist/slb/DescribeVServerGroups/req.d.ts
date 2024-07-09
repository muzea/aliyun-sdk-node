export interface DescribeVServerGroupsRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1o94dp5i6ea*******`
     */
    "LoadBalancerId": string;
    /**
     * 是否返回关联的转发规则信息。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "IncludeRule"?: boolean;
    /**
     * 是否返回关联的监听信息。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "IncludeListener"?: boolean;
    /**
     * 资源标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 虚拟服务器组名称。
     * @example `Group3`
     */
    "Description"?: string;
}
