export interface BindEcsSlbRequest {
    /**
     * 应用ID，可通过调用ListApplication接口来获取，详情请参见[ListApplication](~~149390~~)。
     * @example `93fdd228-*****-ed2ae98de18d`
     */
    "AppId": string;
    /**
     * SLB实例ID
     * @example `lb-uf6j54m3a****cj01jx8`
     */
    "SlbId": string;
    /**
     * SLB监听端口
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * SLB虚拟服务器组ID
     * @example `rsp-2ze****6l*****`
     */
    "VServerGroupId"?: string;
    /**
     * SLB监听协议
     * @example `tcp`
     */
    "ListenerProtocol": string;
    /**
     * 绑定的部署分组ID，可通过调用ListDeployGroup接口来获取，详情请参见[ListDeployGroup](~~62077~~)。
     * @example `577f4c50-16ee-43d8-****-****`
     */
    "DeployGroupId"?: string;
    /**
     * 虚拟服务器组名
     * @example `****​/31405/internet-test-ack-test****​/default/clusterid`
     */
    "VServerGroupName"?: string;
    /**
     * 健康检查路径
     * @example `/_ehc.html`
     */
    "ListenerHealthCheckUrl"?: string;
    /**
     * SLB转发规则
     * @example `example.com/forwarding`
     */
    "VForwardingUrlRule"?: string;
}
