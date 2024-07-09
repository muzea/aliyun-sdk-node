export interface DescribeAccountAttributesRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 查询某类资源在指定地域下的使用配额，N的取值范围为1~8。取值范围：
     * - instance-network-type：可选择的网络类型。
     * - max-security-groups：安全组数量。
     * - max-elastic-network-interfaces：弹性网卡的数量。
     * - max-postpaid-instance-vcpu-count：按量付费实例的vCPU核数上限。
     * - max-spot-instance-vcpu-count：抢占式实例vCPU核数上限。
     * - used-postpaid-instance-vcpu-count：已使用按量付费实例的vCPU核数。
     * - used-spot-instance-vcpu-count：已使用抢占式实例vCPU核数。
     * - max-postpaid-yundisk-capacity：用作数据盘的按量付费云盘的总容量上限。
     * - used-postpaid-yundisk-capacity：已使用的用作数据盘的按量付费云盘容量。
     * - max-dedicated-hosts：专用宿主机数量。
     * - supported-postpaid-instance-types：按量付费I/O优化实例规格。
     * - max-axt-command-count：云助手命令的数量。
     * - max-axt-invocation-daily：每天可以执行的云助手命令次数。
     * - real-name-authentication：账号是否完成了实名认证。
     *     > 您只有完成了实名认证才可以在中国内地地域中创建ECS实例。
     * - max-cloud-assistant-activation-count：可创建的云助手托管实例激活码数量上限。
     * 默认值为空。
     * @example `max-security-groups`
     */
    "AttributeName"?: string[];
}
