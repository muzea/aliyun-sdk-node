export interface GetProjectPoliciesResponse {
    /**
     * 当次请求的Request ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 调用成功时，返回项目信息列表。
     */
    Data: {
        /**
         * 帧率（FPS）。
         * @example `30`
         */
        FrameRate: string;
        /**
         * 是否开启分辨率自适应。
         * @example `true`
         */
        TerminalResolutionAdaptation: boolean;
        /**
         * 会话分辨率宽度。
         * @example `1920`
         */
        SessionResolutionWidth: number;
        /**
         * 会话分辨率高度。
         * @example `1080`
         */
        SessionResolutionHeight: number;
        /**
         * 协议类型。
         * @example `mix`
         */
        StreamingMode: string;
        /**
         * 会话包对应的会话规格。
         * @example `暂不支持，没有返回值`
         */
        SessionSpec: string;
        /**
         * 剪切板状态。
         * @example `0`
         */
        Clipboard: number;
        /**
         * 文件操作状态。
         * @example `0`
         */
        FileTransfer: number;
        /**
         * 最大小时数。
         * @example `1000`
         */
        MaxHours: number;
        /**
         * 最大会话并发数。
         * @example `60`
         */
        MaxSessions: number;
        /**
         * 会话断连保留时长，单位为分钟，有效值1-300。
         * @example `15`
         */
        KeepAliveDuration: number;
        /**
         * 项目唯一id。
         * @example `p-xxxxxxxxxxx`
         */
        ProjectId: string;
    };
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `The parameter ProductType is invalid.`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: string;
}
