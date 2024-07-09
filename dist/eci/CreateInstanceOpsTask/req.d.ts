export interface CreateInstanceOpsTaskRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ECI实例ID。
     * @example `eci-bp1dvysdafbh00t7****`
     */
    "ContainerGroupId": string;
    /**
     * 运维任务类型。取值范围：
     * - coredump
     * - tcpdump
     * @example `coredump`
     */
    "OpsType": string;
    /**
     * 运维任务参数。根据OpsType的取值，可设置相应参数。
     * - 当OpsType取值为coredump时，OpsValue取值范围如下：
     *     - enable：开启coredump。
     *     - disable：关闭coredump。
     * - 当OpsType取值为tcpdump时，OpsValue取值为JSON格式的参数字符串，例如`{"Enable":true, "IfDeviceName":"eth0"}`。具体参数如下：
     *     - Enable：是否开启tcpdump，必填参数，取值为true表示开启，取值为false表示关闭。
     *     - Protocol：网络协议。取值范围为tcp、udp、icmpv4。
     *     - SourceIp：源IP地址。
     *     - SourceCidr：源IP网段。CIDR格式。如果同时设置了IP和IP网段，在IP网段有效时，将忽略IP设置。
     *     - SourcePort：源端口。取值范围为1~65535。
     *     - DestIp：目的IP地址。
     *     - DestCidr：目的IP网段。CIDR格式。如果同时设置了IP和IP网段，在IP网段有效时，将忽略IP设置。
     *     - DestPort：目的端口。取值范围为1~65535。
     *     - IfDeviceName：目标网卡。默认为eth0。
     *     - Snaplen：数据包抓取长度。默认为65535字节。
     *     - Duration：抓取时间。单位为秒。
     *     - PacketNum：抓取数据包的目标个数。
     *     - FileSize：抓取数据包的目标文件大小。单位为字节。最大为1073741824字节（即1 GB）。
     * @example `enable`
     */
    "OpsValue": string;
}
