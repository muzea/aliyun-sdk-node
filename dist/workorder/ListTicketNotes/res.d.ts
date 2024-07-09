export interface ListTicketNotesResponse {
    /**
     * 接口请求结果返回码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `入参非法`
     */
    Message: string;
    /**
     * 接口请求的唯一ID, 每次调用requestID唯一
     * @example `AC0AB2EC-AFBC-44BA-AE77-132A5A1EC0AD`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回值, 即指定工单的对话记录列表数据
     */
    Data: {
        /**
         * 对话类型
         * 1 卡片, 即schema
         * 2  文本, 即content
         * @example `1`
         */
        Type: number;
        /**
         * 沟通消息状态字段, 参考值
         * 未读=1、已读=2
         * @example `6`
         */
        Status: number;
        /**
         * 暂不使用的字段
         * @example `null`
         */
        Tip: string;
        /**
         * 对话记录唯一ID标识
         * @example `9999`
         */
        DialogId: number;
        /**
         * 沟通消息创建时间的时间戳
         * @example `1623396736000`
         */
        CreateTime: number;
        /**
         * 工单沟通记录对象
         */
        Dialog: {
            /**
             * 工单沟通记录系统卡片, 将来开放系统卡片对接能力时使用, 目前阶段用content取纯文本内容即可
             * @example `null`
             */
            Schema: string;
            /**
             * 工单沟通内容
             * @example `你好, 我的ECS续费失败, 请问是什么原因`
             */
            Content: string;
        };
        /**
         * 对话的用户
         */
        User: {
            /**
             * 对话用户角色, 区分小二和用户使用
             * 2, 客服
             * 3, 用户
             * @example `3`
             */
            Role: number;
            /**
             * 对话用户名称
             * @example `工单小二`
             */
            Name: string;
        };
        /**
         * 附件列表
         */
        Attachments: {
            /**
             * 附件名称
             * @example `003.jpg`
             */
            Name: string;
            /**
             * 临时可访问的附件地址
             * @example `https://gts-workorder.oss-cn-beijing.aliyuncs.com/20221003/cbc00fb0-b612-4d89-a75b-8d535f750f9f/image.png`
             */
            Url: string;
        }[];
    }[];
}
