export interface ModifyPolarDbReadWeightRequest {
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 目标PolarDB集群下对应的节点列表，不同集群的节点间用英文逗号（,）分组，组内节点用英文冒号（:）隔开。
     * @example `pi-****************,pi-****************:pi-****************`
     */
    "DbNodeIds": string;
    /**
     * Polar集群ID。
     * @example `pc-****************`
     */
    "DbInstanceId": string;
    /**
     * PolarDB分组对应的权重，多个权重间用英文逗号（,）隔开。
     * @example `14,86`
     */
    "Weights": string;
}
