export interface ModifyRenderingInstanceBandwidthRequest {
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
    /**
     * 入方向最大限流，单位Mb/s。MaxIngressBandwidth/MaxEgressBandwidth至少必选其一，
     * - 实例原始配置不限流；
     * - 无输入或输入0时，默认保留最后一次配置
     * - 输入小于0时，重置为不限流
     * @example `100`
     */
    "MaxIngressBandwidth"?: number;
    /**
     * 出方向最大限流，单位Mb/s。MaxIngressBandwidth/MaxEgressBandwidth至少必选其一，
     * - 实例原始配置不限流；
     * - 无输入或输入0时，默认保留最后一次配置
     * - 输入小于0时，重置为不限流
     * @example `100`
     */
    "MaxEgressBandwidth"?: number;
}
