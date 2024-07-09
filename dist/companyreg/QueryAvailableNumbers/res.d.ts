export interface QueryAvailableNumbersResponse {
    /**
     * 错误信息
     * @example `找不到服务商配置`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `PARTNER.CONFIG.NOT.FOUND`
     */
    ErrorCode: string;
    /**
     * 成功状态标识
     * @example `True`
     */
    Success: boolean;
    /**
     * 可用外呼号码列表
     */
    Data: string[];
}
