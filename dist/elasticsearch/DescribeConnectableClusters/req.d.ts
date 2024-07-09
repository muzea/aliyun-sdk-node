export interface DescribeConnectableClustersRequest {
    /**
     * 当前实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 是否返回已经互通的实例：
     * - true（默认）：返回的实例列表中包括已经互通的实例。
     * - false：返回的实例列表中不包括已经互通的实例。
     * @example `true`
     */
    "alreadySetItems"?: boolean;
}
