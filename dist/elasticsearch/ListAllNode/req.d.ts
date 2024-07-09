export interface ListAllNodeRequest {
    /**
     * 实例ID。
     * @example `es-cn-tl32cpgwa002l****`
     */
    "InstanceId": string;
    /**
     * 是否返回节点的监控信息。可选值：
     * - true（默认值）：返回
     * - false：不返回
     * @example `false`
     */
    "extended"?: boolean;
}
