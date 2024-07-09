export interface DescribeLogStoreOfEndpointGroupResponse {
    /**
     * 返回信息列表。
     * @example `1777E713-8456-55F1-9A69-9AD9EAE2B3B6`
     */
    RequestId: string;
    /**
     * 全球加速实例ID。
     * @example `ga-xxxxxxxxxxxxx`
     */
    AcceleratorId: string;
    /**
     * 监听实例ID。
     * @example `lsr-xxxxxxxxxxxxxxx`
     */
    ListenerId: string;
    /**
     * 终端节点组ID。
     * @example `epg-xxxxxxxxxxxxxxx`
     */
    EndpointGroupId: string;
    /**
     * 日志服务所属地域ID。
     * @example `cn-hangzhou`
     */
    SlsRegionId: string;
    /**
     * 日志服务项目（Project）名称。
     * @example `ga_project_name`
     */
    SlsProjectName: string;
    /**
     * 日志库（Logstore）名称。
     * @example `ga_log`
     */
    SlsLogStoreName: string;
    /**
     * 访问日志绑定状态。
     * - **on**：已绑定。
     * - **off**：未绑定。
     * @example `on`
     */
    Status: string;
}
