export interface ListMPCoSPhaseHistoryRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 指定显示返回结果中的第几页，最小取值是1。
     * @example `1`
     */
    "Num": number;
    /**
     * 指定返回结果中每页显示的记录数量，最大值是100。
     * @example `2`
     */
    "Size": number;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 协同模型标识。
     * @example `383860792287****`
     */
    "PhaseGroupId": string;
    /**
     * 阶段标识。
     * @example `644208887511****`
     */
    "PhaseId": string;
    /**
     * 数据唯一标识。
     * @example `32bfce96b4e2f9bec0f2ea5cc2f14ace1486cc146d5832d3a84e5332fe89****`
     */
    "DataKey": string;
    /**
     * 开始时间。毫秒级时间戳。
     * @example `1606379090866`
     */
    "StartTime": number;
    /**
     * 结束时间。毫秒级时间戳。
     * @example `1606389090866`
     */
    "EndTime": number;
}
