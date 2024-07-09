export interface GetEditingProjectMaterialsResponse {
    /**
     * 请求ID。
     * @example `746FFA07-8BBB-46B1-3E94E3B2915E****`
     */
    RequestId: string;
    MaterialList: {
        /**
         * 素材列表。
         */
        Material: {
            /**
             * 素材状态。取值：
             * - **Normal**：草稿	。
             * - **Producing**：合成中。
             * - **Produced**	：合成成功。
             * - **ProduceFailed**：合成失败。
             * @example `Normal`
             */
            Status: string;
            /**
             * 素材创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-10-19 10:48:17`
             */
            CreationTime: string;
            /**
             * 素材分类ID。
             * @example `100005****`
             */
            CateId: number;
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
             * @example `剪辑测试`
             */
            Tags: string;
            /**
             * 雪碧图配置。
             * @example `xxx`
             */
            SpriteConfig: string;
            /**
             * 雪碧图来源。
             * @example `xxx`
             */
            Source: string;
            /**
             * 素材分类名称。
             * @example `测试`
             */
            CateName: string;
            /**
             * 素材更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-10-19 10:48:17`
             */
            ModifiedTime: string;
            /**
             * 素材描述。
             * @example `测试`
             */
            Description: string;
            /**
             * 素材ID。
             * @example `85befc4118b84c6723e53b80b1****`
             */
            MaterialId: string;
            /**
             * 素材源文件大小，单位：字节。
             * @example `1682694`
             */
            Size: number;
            /**
             * 素材封面URL。
             * @example `http://example.aliyundoc.com/aivideocover/46fa444aa34065cb9250f6c****​/image_01.jpg`
             */
            CoverURL: string;
            /**
             * 素材时长，精确到小数点后4位，单位：秒。
             * @example `15.16`
             */
            Duration: number;
            /**
             * 素材标题。
             * @example `test`
             */
            Title: string;
            Sprites: {
                /**
                 * 素材雪碧图URL数组。
                 */
                Sprite: string[];
            };
            Snapshots: {
                /**
                 * 素材截图URL数组。
                 */
                Snapshot: string[];
            };
        }[];
    };
}
