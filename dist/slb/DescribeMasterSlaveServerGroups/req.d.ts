export interface DescribeMasterSlaveServerGroupsRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp14zi0n66zpg6o******`
     */
    "LoadBalancerId": string;
    /**
     * 是否返回关联的监听信息，取值：
     * - **true**：返回。
     * - **false**：不返回。
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
     * 主备服务器组名称。
     * @example `Group3`
     */
    "Description"?: string;
}
