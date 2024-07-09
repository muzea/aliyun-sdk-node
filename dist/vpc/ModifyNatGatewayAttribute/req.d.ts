export interface ModifyNatGatewayAttributeRequest {
    /**
     * 要修改的NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要修改的NAT网关的ID。
     * @example `ngw-2ze0dcn4mq31qx2jc****`
     */
    "NatGatewayId": string;
    /**
     * 要修改的NAT网关名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `nat123`
     */
    "Name"?: string;
    /**
     * 要修改的NAT网关描述信息。
     * 描述长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `Description`
     */
    "Description"?: string;
    /**
     * 是否开启ICMP代回。取值：
     * - **true**（默认值）：开启。
     * - **false**：不开启。
     * @example `true`
     */
    "IcmpReplyEnabled"?: boolean;
    /**
     * 修改NAT网关的EIP绑定模式。取值：可以为空，非空时只允许为**NAT**，表示绑定模式为EIP普通模式。
     * > - 只支持将**MULTI_BINDED**模式修改为**NAT**模式，不支持将**NAT**模式修改为**MULTI_BINDED**模式。关于**MULTI_BINDED**模式的具体信息，请参见[CreateNatGateway](~~120219~~)。
     * - 在EIP绑定模式切换过程中网络连接会出现秒级别闪断（闪断时间随着EIP数量增加而变长，目前最多支持绑定5个EIP的NAT网关进行配置变更），请您尽量在业务低峰期执行切换操作。
     * - EIP绑定模式变更为**NAT**后，公网NAT网关将兼容IPv4网关，但绑定一个公网EIP时将占用NAT网关所在交换机的一个私网IP，请确保NAT网关所在交换机内私网IP地址充足，如果NAT网关所在的交换机没有可用的空闲私网地址时，将无法绑定新的EIP。
     * @example `NAT`
     */
    "EipBindMode"?: string;
    /**
     * 是否开启会话日志，取值：
     * - **true**：已开启会话日志。
     * - **false**：已关闭会话日志。
     * @example `true`
     */
    "EnableSessionLog"?: boolean;
    /**
     * 会话日志配置信息。
     */
    "LogDelivery"?: {
        /**
         * 会话日志写入类型。取值：**sls**，阿里云日志服务SLS。
         * @example `sls`
         */
        LogDeliveryType: string;
        /**
         * 会话日志写入地址。取值：acs:log:${regionName}:${projectOwnerAliUid}:project/${projectName}/logstore/${logstoreName}
         * @example `acs:log:cn-hangzhou:0000:project/nat_session_log_project/logstore/session_log_test`
         */
        LogDestination: string;
    };
}
