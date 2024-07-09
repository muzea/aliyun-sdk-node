export interface DescribeAccessControlListAttributeResponse {
    /**
     * 访问控制策略组ID。
     * @example `acl-bp1ut10zzvh1y8dfs****`
     */
    AclId: string;
    Tags: {
        /**
         * ACL的标签集合。
         */
        Tag: {
            /**
             * ACL的标签键。
             * @example `TestKey`
             */
            TagKey: string;
            /**
             * ACL的标签值。
             * @example `TestValue`
             */
            TagValue: string;
        }[];
    };
    /**
     * 关联的实例的IP类型。
     * @example `ipv4`
     */
    AddressIPVersion: string;
    /**
     * 请求ID。
     * @example `C9906A1D-86F7-4C9C-A369-54DA42EF206A`
     */
    RequestId: string;
    /**
     * 企业资源组ID。
     * @example `rg-acfmz3jksig****`
     */
    ResourceGroupId: string;
    /**
     * 访问控制策略组名称。
     * @example `doctest`
     */
    AclName: string;
    AclEntrys: {
        /**
         * 访问控制策略组的信息列表。
         */
        AclEntry: {
            /**
             * 访问控制条目备注。
             * @example `访问控制条目。`
             */
            AclEntryComment: string;
            /**
             * 访问控制条目IP。
             * @example `192.168.0.1`
             */
            AclEntryIP: string;
        }[];
    };
    RelatedListeners: {
        /**
         * 该访问控制策略组已绑定的监听列表。
         */
        RelatedListener: {
            /**
             * 绑定的监听的前端端口。
             * @example `443`
             */
            ListenerPort: number;
            /**
             * 访问控制的类型：
             * - **black**：黑名单
             * - **white**：白名单
             * @example `white`
             */
            AclType: string;
            /**
             * 绑定的监听的协议类型。
             * @example `https`
             */
            Protocol: string;
            /**
             * 传统型负载均衡实例的ID。
             * @example `lb-bp1qpzldlm38bnexl****`
             */
            LoadBalancerId: string;
        }[];
    };
    /**
     * 访问控制策略的创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-08-31T02:49:05Z`
     */
    CreateTime: string;
    /**
     * 访问控制条目总数。
     * @example `200`
     */
    TotalAclEntry: number;
}
