export interface CreateLiveMessageAppResponse {
    /**
     * 请求ID。
     * @example `65EEDBEB-43FE-1E15-976F-3DDD753A****`
     */
    RequestId: string;
    /**
     * 应用ID，用于后续加入群等流程。
     * @example `demo`
     */
    AppId: string;
    /**
     * AppKey，用于生成与该AppId相关的各种操作鉴权。
     * @example `**********************************`
     */
    AppKey: string;
    /**
     * 应用签名，互动消息服务SDK需要该信息。
     * @example `**************************************************************************`
     */
    AppSign: string;
    /**
     * 数据中心。
     * @example `cn-shanghai`
     */
    DataCenter: string;
}
