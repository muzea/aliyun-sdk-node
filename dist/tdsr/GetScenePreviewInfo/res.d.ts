export interface GetScenePreviewInfoResponse {
    /**
     * Id of the request
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `0：成功，其他：失败`
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
         * html转译后的预览数据
         * @example `一串转译数据`
         */
        PanoList: string;
        /**
         * 模型地址
         * @example `https://www.aliyundoc.com/sgm/A.e.QRQRLWYEHIUEYLYW/A.e.QRQRLWYEHIUEYLYW****.sgm`
         */
        ModelPath: string;
        /**
         * 模型的贴图路径
         * @example `https:/www.aliyundoc.com/sgm/A.e.QRQRLWYEHIUEYLYW****​/model_texture/`
         */
        TextureModelPath: string;
        /**
         * 漫游后预览图片路径
         * @example `https://www.aliyundoc.com/sgm/A.e.QRQRLWYEHIUEYLYW****​/pano_texture/`
         */
        TexturePanoPath: string;
    };
}
