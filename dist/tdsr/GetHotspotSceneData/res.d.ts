export interface GetHotspotSceneDataResponse {
    /**
     * Id of the request
     * @example `A8CD0AD9-8A92-455A-A984-A7E4B76****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true/false`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `xxxxx`
     */
    Message: string;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 3D模型：MODEL_3D 全景图片：PIC 全景视频：VIDEO
         * @example `MODEL_3D`
         */
        SceneType: string;
        /**
         * 预览token
         * @example `344794c32937474a9c59eb130936****`
         */
        PreviewToken: string;
        /**
         * html转译后的预览数据，包含图片、子场景ID等信息
         * @example `一串转译数据`
         */
        PreviewData: string;
        /**
         * 模型token（sgm token）
         * @example `A.e.QRQRLWYEHIUE****`
         */
        ModelToken: string;
    };
}
