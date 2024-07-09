export interface CreateMPCoSPhaseRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 阶段名称。
     * 长度为2~30字符，可以包含中文、英文字母、数字、下划线（_）、横线（-）、英文句号（.）和圆括号（()）。
     * @example `某阶段`
     */
    "Name": string;
    /**
     * 备注信息。长度限制为100字符。
     * @example `某阶段的备注信息。`
     */
    "Remark"?: string;
    /**
     * 协同模型标识。
     * @example `987823074334****`
     */
    "PhaseGroupId": string;
}
