export interface CreateLoadBalancerRequest {
    /**
     * ENS节点ID。
     * @example `cn-chengdu-telecom`
     */
    "EnsRegionId": string;
    /**
     * 负载均衡实例的规格。
     * @example `elb.s2.medium`
     */
    "LoadBalancerSpec": string;
    /**
     * 负载均衡实例的名称，长度为1~80个英文或中文字符。不指定该参数时，由系统随机分配一个实例名称。
     * > 不能以`http://`和`https://`开头。
     * @example `gcs-pre-websocket-eslb-telecom`
     */
    "LoadBalancerName"?: string;
    /**
     * 付费类型。PostPaid（目前只支持此种）：按量付费。
     * @example `PostPaid`
     */
    "PayType": string;
    /**
     * 创建的边缘负载均衡（ELB）实例的网络ID。
     * @example `n-5sax03dh2eyagujgsn7z9****`
     */
    "NetworkId": string;
    /**
     * 专有网络实例的所属的交换机ID。
     * @example `vsw-5s78haoys9oylle6ln71m****`
     */
    "VSwitchId": string;
}
