export interface SaveBatchDomainRemarkRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**，此参数为必填项。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 备注信息。
     * @example `MyRemarkInfo`
     */
    "Remark"?: string;
    /**
     * 实例编号列表，建议**10**条一组，每组最多**50**条，以逗号（，）隔开。
     * @example `S12344567`
     */
    "InstanceIds": string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
