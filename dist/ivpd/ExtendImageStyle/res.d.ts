export interface ExtendImageStyleResponse {
    /**
     *
     * @example `Success`
     */
    Message: string;
    /**
     *
     * @example `7308917D-9E1B-4F11-8A79-0F140270E672`
     */
    RequestId: string;
    /**
     * 响应的数据，具体字段请查看结构定义。
     */
    Data: {
        /**
         * 全图进行风格化的结果
         * @example `http://luban-vgd-invi.oss-cn-hangzhou.aliyuncs.com/upload/filterwrapper-et3invipre-filterplan-1930545240-f79fb/2019-8-27/invi__015668930975431000123_vq9uY7.jpg?Expires=1566896697&OSSAccessKeyId=LTAIDTT5xL3nv1sI&Signature=uRh3gwFcUmJ2XcfHWQIWIMkvl3E%3D`
         */
        Url: string;
        /**
         * 为保留人像不变的风格化结果,输入的majorUrl内容图中无人物, 则为空字符串
         * @example `http://luban-vgd-invi.oss-cn-hangzhou.aliyuncs.com/upload/filterwrapper-et3invipre-filterplan-1930545240-f79fb/2019-8-27/invi__015668930975431000123_vq9uY7.jpg?Expires=1566896697&OSSAccessKeyId=LTAIDTT5xL3nv1sI&Signature=uRh3gwFcUmJ2XcfHWQIWIMkvl3E%3D`
         */
        MajorUrl: string;
    };
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
}
