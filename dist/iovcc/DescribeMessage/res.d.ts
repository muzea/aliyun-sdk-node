export interface DescribeMessageResponse {
    /**
     * 请求ID
     * @example `sfsgghdhh56666`
     */
    RequestId: string;
    /**
     * 消息详情
     */
    Message: {
        /**
         * 消息类型。
         * **1**表示透传；**2**表示通知。
         * @example `2`
         */
        Type: number;
        /**
         * 消息侦听通道。
         * @example `com.aliyun.iovcc.test`
         */
        Action: string;
        /**
         * iovcc项目工程ID。
         * @example `ssgdghww`
         */
        ProjectId: string;
        /**
         * 预期消息到达设备数。
         * @example `3`
         */
        PredictSendCnt: number;
        /**
         * alios系统专用，用于定位接收消息应用。
         * @example `page://broadcast.alios.com`
         */
        Uri: string;
        /**
         * 通知内容描述。
         * @example `this is desc test`
         */
        Desc: string;
        AuditMsg: string;
        /**
         * 客户端应用名称。
         * @example `pushdemo`
         */
        AppName: string;
        /**
         * 客户端应用标识，项目工程下自定义应用appKey。
         * @example `wTiRKC9m`
         */
        AppKey: string;
        /**
         * 消息创建时间，精确到毫秒。
         * @example `1525681245000`
         */
        GmtCreateTime: number;
        /**
         * 失效时间，精确到毫秒。
         * @example `1525684245000`
         */
        ExipiredTime: number;
        /**
         * 消息到达设备数量。
         * @example `1`
         */
        AckCnt: number;
        /**
         * 通知标题。
         * @example `this is a title test`
         */
        Title: string;
        /**
         * 消息参数。
         * 为pkgContent与customCent合并后的json字符串。
         * @example `{\"package\":\"com.aliyun.iovcc.test\",\"key1\":\"value1\"}"`
         */
        Parameter: string;
        Audit: number;
        /**
         * 消息ID。
         * @example `2231942`
         */
        Id: number;
        /**
         * 消息状态。
         * **0**表示发送中；**1**表示消息发送完成；**2**表示消息已失效。
         * @example `0`
         */
        SendStatus: number;
    };
}
