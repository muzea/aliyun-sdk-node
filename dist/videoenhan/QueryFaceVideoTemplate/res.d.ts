export interface QueryFaceVideoTemplateResponse {
    /**
     * 请求ID。
     * @example `A06E3D21-890D-500B-97DA-D8B99D2DDDC4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 当前账号下的可用模板总数量。
         * @example `20`
         */
        Total: number;
        /**
         * 模板列表。
         */
        Elements: {
            /**
             * 模板创建时间。
             * @example `2021-09-06 15:17:19`
             */
            CreateTime: string;
            /**
             * 模板更新时间。
             * @example `2021-09-06 15:18:15`
             */
            UpdateTime: string;
            /**
             * 用户ID。
             * @example `zhangsan`
             */
            UserId: string;
            /**
             * 模板ID。
             * @example `3bf2418c-7adf-4002-a9d6-2f7cf1889c0d`
             */
            TemplateId: string;
            /**
             * 新增模板时设置的视频人脸模板地址。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/image-face-fusion/OriginUrl/user/2021-09-06/e4d6ecf6-8dc8-4dac-acb5-56a737ccbc06?Expires=1630914551&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=kBcLm66y7%2FZ3eIMgwXJg1zNP7k****`
             */
            TemplateURL: string;
            /**
             * 用户输入视频为多个人脸时，返回各人脸ID和位置信息。
             * > 只有在添加模板时选择了多人视频换脸场景（即**VideoScene**参数必须传入`multi`值）时，才会返回**FaceInfos**信息。
             */
            FaceInfos: {
                /**
                 * 人脸对应的子模板ID。
                 * @example `7d1a2498-0f9a-42d8-bae8-c7e478188106_0`
                 */
                TemplateFaceID: string;
                /**
                 * 人脸对应的子模板ID对应的人脸图。
                 * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-face-fusion/template/xhtest_7d1a2498-0f9a-42d8-bae8-c7e478188106/xhtest_7d1a2498-0f9a-42d8-bae8-c7e478188106_0.png?Expires=1686040781&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=WVYTf%2F3knRuUPXSVGVz%2FZi3Miu****`
                 */
                TemplateFaceURL: string;
            }[];
        }[];
    };
}
