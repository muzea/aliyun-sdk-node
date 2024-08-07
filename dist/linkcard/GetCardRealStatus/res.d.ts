export interface GetCardRealStatusResponse {
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * true：调用成功。 false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回码。
     * 200：表示成功。 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 轮询查询结果的唯一标识。
         * 说明：
         * 1、因该接口运营商能力较弱，查询结果需时，故结合轮询能力使用。
         * 2、在首次请求后，如Status未成功，则返回参数中会带此数据，再用此数据进行结果轮询。
         * @example `4f84******7895`
         */
        SerialNo: string;
        /**
         * 卡的ICCID，当请求ICCID为多网卡主卡时，此处返回子卡ICCID。
         * @example `89860321******15668`
         */
        Iccid: string;
        /**
         * 网络服务状态。
         * true：开通。
         * false：关闭。
         * @example `true`
         */
        Gprs: boolean;
        /**
         * 在线状态。
         * true：在线。
         * false：不在线。
         * @example `true`
         */
        Online: boolean;
        /**
         * 查询结果状态：
         * SUCCESS：成功
         * FAILURE：失败
         * PROCESSING ：处理中
         * @example `SUCCESS`
         */
        Status: string;
    }[];
}
