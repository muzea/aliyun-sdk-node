export interface ListDataStreamsRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif24adwc0082****`
     */
    "InstanceId": string;
    /**
     * 是否只显示托管中的索引，取值含义如下：
     * - true：只显示托管中的索引。
     * - false（默认值）：显示全部索引。
     * @example `false`
     */
    "isManaged"?: boolean;
    /**
     * 数据流名称。
     * @example `Log1`
     */
    "name"?: string;
}
