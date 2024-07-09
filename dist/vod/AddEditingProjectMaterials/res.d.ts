export interface AddEditingProjectMaterialsResponse {
    /**
     * 请求ID
     * @example `85237CDA-0B54-5CED-BA10-A8A71AA13C1A`
     */
    RequestId: string;
    /**
     * 素材列表
     */
    MaterialList: {
        /**
         * 素材状态。取值：
         * - **Normal**：正常。
         * - **Uploading**：上传中。
         * - **UploadFail**	：上传成功。
         * @example `Normal`
         */
        Status: string;
        /**
         * 分类ID
         * @example `1000487543`
         */
        CateId: number;
        /**
         * 素材创建时间。格式为：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
         * @example `2019-10-02T08:26Z`
         */
        CreateTime: string;
        /**
         * 素材类型。取值：
         * - **video**：视频
         * - **audio**：纯音频
         * - **image**：图片
         * @example `video`
         */
        MaterialType: string;
        /**
         * 素材标签。多个使用半角逗号（,）分隔。
         * @example `tag1,tag2`
         */
        Tags: string;
        /**
         * 雪碧图配置。
         * @example `xxx`
         */
        SpriteConfig: string;
        /**
         * 素材分类名称。
         * @example `分类1`
         */
        CateName: string;
        /**
         * 素材描述。
         * @example `素材描述`
         */
        Description: string;
        /**
         * 素材id。
         * @example `85befc4118b84c6723e53b80b1****`
         */
        MaterialId: string;
        /**
         * 文件大小。
         * @example `1682694`
         */
        Size: number;
        /**
         * 素材封面url。
         * @example `http://example.aliyundoc.com/aivideocover/46fa444aa34065cb9250f6c****​/image_01.jpg`
         */
        CoverURL: string;
        /**
         * 素材时长。单位（秒），精确到小数点后4位。
         * @example `3690.2332`
         */
        Duration: number;
        /**
         * 用户id。
         * @example `1234751840694470`
         */
        CustomerId: number;
        /**
         * 素材标题。
         * @example `test`
         */
        Title: string;
        /**
         * 素材更新时间。格式为：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
         * @example `2022-11-25T07:28:34Z`
         */
        ModifyTime: string;
        /**
         * 素材雪碧图url数组。
         */
        Sprites: string[];
        /**
         * 素材截图URL数组。
         */
        Snapshots: string[];
    }[];
}
