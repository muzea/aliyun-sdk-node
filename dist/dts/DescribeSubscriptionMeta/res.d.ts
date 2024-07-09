export interface DescribeSubscriptionMetaResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `C12E7A51-09A4-5796-94BE-08B6DA******`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 订阅子任务的数据信息。
     */
    SubscriptionMetaList: {
        /**
         * 子任务的消费组ID。
         * @example `z38m91gg2******`
         */
        Sid: string;
        /**
         * 子任务的消费位点，即客户端消费第一条数据的时间戳。格式为Unix时间戳，单位为秒。
         * >  Unix时间戳转换工具可用搜索引擎获取。
         * @example `1610524452`
         */
        Checkpoint: number;
        /**
         * 数据订阅通道的网络地址及端口号信息。
         * @example `dts-cn-hangzhou.aliyuncs.com:18001`
         */
        DProxyUrl: string;
        /**
         * 子任务的订阅对象。详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
         * @example `{\"dtstestdata\":{\"name\":\"dtstestdata\",\"all\":false,\"Table\":{\"order\":{\"name\":\"order\",\"all\":true}}}}`
         */
        DBList: string;
        /**
         * 子任务的订阅Topic。
         * @example `cn_hangzhou_rm_bp1n0x0x5tz******_dtstestdata_version2`
         */
        Topic: string;
    }[];
}
