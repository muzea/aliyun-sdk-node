export interface GetAclResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 访问控制策略组ID。
     * @example `nacl-hp34s2h0xx1ht4nwo****`
     */
    AclId: string;
    /**
     * 访问控制策略组的IP版本。
     * - **IPv4**。
     * - **IPv6**。
     * @example `IPv4`
     */
    AddressIPVersion: string;
    /**
     * 访问控制策略组状态。
     * - **init**：初始化。
     * - **active**：可用。
     * - **configuring**：配置中。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `active`
     */
    AclStatus: string;
    /**
     * 添加的访问控制条目列表。
     */
    AclEntries: {
        /**
         * 访问控制IP地址条目(192.168.XX.XX)或IP地址段条目(10.0.XX.XX/24)。
         * @example `10.0.XX.XX/24`
         */
        Entry: string;
        /**
         * 访问控制条目备注内容。
         * @example `test-entry`
         */
        EntryDescription: string;
    }[];
    /**
     * 关联的监听列表。
     */
    RelatedListeners: {
        /**
         * 监听ID。
         * @example `lsr-bp1bpn0kn908w4nbw****`
         */
        ListenerId: string;
        /**
         * 访问控制类型。
         * - **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问全球加速实例监听。如果开启了白名单访问，但访问策略组中没有添加任何IP，则全球加速监听会转发全部请求。
         * - **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。如果开启了黑名单访问，但访问策略组中没有添加任何IP，则全球加速实例监听会转发全部请求。
         * @example `white`
         */
        AclType: string;
        /**
         * 全球加速实例ID。
         * @example `ga-bp1odcab8tmno0hdq****`
         */
        AcceleratorId: string;
    }[];
    /**
     * 访问控制策略组的名称。
     * @example `test-acl`
     */
    AclName: string;
    /**
     * 资源组ID。
     * @example `rg-acfmx7itmygzsza`
     */
    ResourceGroupId: string;
    /**
     * 访问控制策略组的标签。
     */
    Tags: {
        /**
         * 标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
