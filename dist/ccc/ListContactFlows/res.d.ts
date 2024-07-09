export interface ListContactFlowsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 联系流列表。
         */
        List: {
            /**
             * IVR联系流类型。
             * @example `MAIN_FLOW`
             */
            Type: string;
            /**
             * IVR的内容，由后台解析，客户无需关心。
             * @example `{"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到阿里云呼叫中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}`
             */
            Definition: string;
            /**
             * 草稿ID，当IVR流程处于未发布状态时返回此字段。
             * @example `db07c0bb-6b1f-47d2-b37e-2451c617562d`
             */
            DraftId: string;
            /**
             * 版本描述。
             * @example `1.0`
             */
            Description: string;
            /**
             * 上次修改的时间。
             * @example `2021-03-08 15:34:49.0`
             */
            UpdatedTime: string;
            /**
             * 此草稿的当前编辑者的坐席登录名。
             * @example `ccc-test`
             */
            Editor: string;
            /**
             * 是否发布过。
             * @example `true`
             */
            Published: boolean;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * IVR联系流名称。
             * @example `默认流程`
             */
            Name: string;
            /**
             * IVR联系流ID。
             * @example `78128960-bb00-4ddc-8e82-923a8c5bd22d`
             */
            ContactFlowId: string;
            /**
             * 创建时间。
             * @example `2021-03-05 17:35:45.0`
             */
            CreatedTime: string;
            /**
             * IVR联系流绑定的号码列表。
             */
            NumberList: string[];
        }[];
    };
}
