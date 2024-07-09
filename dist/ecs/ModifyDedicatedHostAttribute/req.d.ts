export interface ModifyDedicatedHostAttributeRequest {
    /**
     * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有宿主机ID。
     * @example `dh-bp165p6xk2tlw61e****`
     */
    "DedicatedHostId": string;
    /**
     * 专有宿主机名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testDedicatedHostName`
     */
    "DedicatedHostName"?: string;
    /**
     * 专有宿主机的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：
     * - Migrate：迁移实例到其他物理机并重新启动实例。
     * - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。
     * 当专有宿主机上挂载的是云盘时，默认值：Migrate。
     * 当专有宿主机上挂载的是本地盘时，默认值：Stop。
     * @example `Migrate`
     */
    "ActionOnMaintenance"?: string;
    /**
     * 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310。
     * @example `60`
     */
    "NetworkAttributes.SlbUdpTimeout"?: number;
    /**
     * 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310。
     * @example `60`
     */
    "NetworkAttributes.UdpTimeout"?: number;
    /**
     * 设置专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云自动从资源池中选取专有宿主机放置实例。取值范围：
     * - on：加入自动部署资源池。
     * - off：不加入自动部署资源池。
     * 自动部署功能详情，请参见[功能特性](~~118938~~)。
     * @example `on`
     */
    "AutoPlacement"?: string;
    /**
     * 专有宿主机集群ID。
     * @example `dc-bp165p6xk2tlw61e****`
     */
    "DedicatedHostClusterId"?: string;
    /**
     * CPU超卖比。仅自定义规格g6s、c6s、r6s支持设置CPU超卖比。取值范围：1~5。
     * CPU超卖比影响DDH的可用vCPU数，一台DDH的可用vCPU数=物理CPU核数\*2\*CPU超卖比。例如，g6s的物理CPU核数为52，如果设置CPU超卖比为4，则修改完成后vCPU总数显示为416。针对CPU绝对稳定性要求不严苛或者CPU负载不高的场景，例如开发测试环境，提升超卖比可以提升可用vCPU数，用于部署更多同等规格的ECS实例，降低单位部署成本。
     * @example `1`
     */
    "CpuOverCommitRatio"?: number;
}
