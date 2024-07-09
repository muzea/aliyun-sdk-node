export interface GetMessageCallbackResponse {
    /**
     * 请求ID。
     * @example `272A222A-F7F7-4A3E-****-F531574F1234`
     */
    RequestId: string;
    /**
     * 事件通知配置。
     */
    MessageCallback: {
        /**
         * 回调方式，取值：
         * - **HTTP**
         * - **MNS**
         * @example `HTTP`
         */
        CallbackType: string;
        /**
         * 回调方式选择HTTP时，回调地址。
         * @example `http://test.com/test`
         */
        CallbackURL: string;
        /**
         * 回调事件类型。
         * @example `FileUploadComplete,StreamTranscodeComplete,TranscodeComplete,SnapshotComplete,AIComplete,AddLiveRecordVideoComplete,CreateAuditComplete,UploadByURLComplete,ProduceMediaComplete,LiveRecordVideoComposeStart,ImageUploadComplete,VideoAnalysisComplete`
         */
        EventTypeList: string;
        /**
         * 应用ID。
         * @example `app-1000000`
         */
        AppId: string;
        /**
         * 回调方式选择MNS时，消息队列名称。
         * @example `vodcallback`
         */
        MnsQueueName: string;
        /**
         * 回调方式选择HTTP时，鉴权Key。
         * @example `12345678abc`
         */
        AuthKey: string;
        /**
         * 回调方式选择HTTP时，回调鉴权开关，取值：
         * - **on**（启用）
         * - **off**（不启用）
         * @example `on`
         */
        AuthSwitch: string;
        /**
         * 回调方式选择MNS时，消息队列公网Endpoint。
         * @example `http://1234567.mns.cn-shanghai-internal.aliyuncs.com/`
         */
        MnsEndpoint: string;
    };
}
