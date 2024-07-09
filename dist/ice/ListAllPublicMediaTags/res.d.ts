export interface ListAllPublicMediaTagsResponse {
    /**
     * 请求ID
     * @example `B45F83B7-7F87-4792-BFE9-63CD2137CAF0`
     */
    RequestId: string;
    /**
     * 公共素材库标签列表
     */
    MediaTagList: {
        /**
         * 素材标签id
         * @example `sticker-gif`
         */
        MediaTagId: string;
        /**
         * 素材标签中文名
         * @example `Gif`
         */
        MediaTagNameChinese: string;
        /**
         * 素材标签英文名
         * @example `动图`
         */
        MediaTagNameEnglish: string;
        /**
         * 选项列表
         */
        Options: {
            /**
             * 筛选项ID
             * @example `Angry`
             */
            OptionId: string;
            /**
             * 筛选项英文名
             * @example `Angry`
             */
            OptionEnglishName: string;
            /**
             * 筛选项中文名
             * @example `愤怒`
             */
            OptionChineseName: string;
        }[];
    }[];
}
