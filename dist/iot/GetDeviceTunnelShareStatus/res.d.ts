export interface GetDeviceTunnelShareStatusResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `ACC1D51C-1A58-440E-92A7-71AB61C6595A`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的信息。
     */
    Data: {
        /**
         * 隧道分享ID。
         * > 当**IsOpen**的值为**false**时，此处为空。
         * @example `18f72f95cad34ca3aeabeeefcb******`
         */
        ShareId: string;
        /**
         * 隧道分享密码。
         * > 当**IsOpen**的值为**false**时，此处为空。
         * @example `848bbfa0e9a31e579502869920b4d4c********`
         */
        Password: string;
        /**
         * 开启隧道分享的Unix时间戳。
         * > 当**IsOpen**的值为**false**时，此处为空。
         * @example `1617941371000`
         */
        GmtOpened: number;
        /**
         * 是否已开启隧道分享：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        IsOpen: boolean;
    };
}
