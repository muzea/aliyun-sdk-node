export interface UpgradeFabricChaincodeDefinitionResponse {
    /**
     * 消息
     * @example `ok`
     */
    Message: string;
    /**
     * 请求ID
     * @example `1E55C947-19B4-4AAD-9D22-0B8DA8904B3D`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 结果
     * @example `链码信息`
     */
    Result: any;
}
