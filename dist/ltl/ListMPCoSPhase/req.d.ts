export interface ListMPCoSPhaseRequest {
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
     * @example `1`
     */
    "Size": number;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 协同模型标识。
     * @example `987823074334****`
     */
    "PhaseGroupId": string;
    /**
     * 要查询的阶段名称。
     * > 不传则查询该协同模型下所有阶段。
     * @example `某阶段`
     */
    "Name"?: string;
}
