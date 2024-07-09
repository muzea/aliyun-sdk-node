export interface QueryUserOmsDataResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6000EE23-274B-4E07-A697-FF2E999520A4`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 下页开始NextToken字段，如为空或无此项表示已无数据。
         * @example `NextToken`
         */
        Marker: string;
        /**
         * 主机ID。
         * @example `cn`
         */
        HostId: string;
        OmsData: any[];
    };
}
