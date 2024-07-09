export interface GetContactFlowResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码
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
     * @example `2263B273-AC1B-44EB-BA98-87F2322C6780`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 流程类型：
         * MAIN\_FLOW（主流程）
         * SUB\_FLOW（子流程）
         * SURVEY\_FLOW（满意度流程）
         * @example `MAIN_FLOW`
         */
        Type: string;
        /**
         * IVR的内容。
         * @example `{"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到阿里云呼叫中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}`
         */
        Definition: string;
        /**
         * 草稿ID，当前联系流对应的可编辑草稿版本ID。
         * @example `566399d7-5558-447c-a72f-9be2768b6a82
        `
         */
        DraftId: string;
        /**
         * 版本描述。
         * @example `1.0
        `
         */
        Description: string;
        /**
         * 上次修改的时间。
         * @example `2021-07-14 10:48:43.0`
         */
        UpdatedTime: string;
        /**
         * 此草稿的当前编辑者的坐席登录名。
         * @example `editor-xxx`
         */
        Editor: string;
        /**
         * 是否已发布 True：已发布：False：未发布
         * @example `False`
         */
        Published: boolean;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * IVR名称。
         * @example `欢迎语`
         */
        Name: string;
        /**
         * 联系流ID。
         * @example `274601be-a6d5-4429-bcef-32b51d031c6e
        `
         */
        ContactFlowId: string;
        /**
         * 联系流程草稿创建时间。
         * @example `2021-07-14 10:48:43.0`
         */
        CreatedTime: string;
    };
}
