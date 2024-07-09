export interface GetAttachedMediaInfoResponse {
    /**
     * 请求ID。
     * @example `221BCB57-B217-42BF-619BD13378F9****`
     */
    RequestId: string;
    /**
     * 不存在的辅助媒资ID。
     */
    NonExistMediaIds: string[];
    /**
     * 辅助媒资信息列表。
     */
    AttachedMediaList: {
        /**
         * 辅助媒资类型。
         * - **watermark**：水印。
         * - **subtitle**：字幕。
         * - **material**：素材。
         * @example `subtitle`
         */
        Type: string;
        /**
         * 辅助媒资的存储地址。
         * @example `outin-bfefbb9*****c7426.oss-cn-shanghai.aliyuncs.com`
         */
        StorageLocation: string;
        /**
         * 辅助媒资创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-01T10:00:00Z`
         */
        CreationTime: string;
        /**
         * 辅助媒资状态。取值：
         * - **Uploading**：上传中。
         * - **Normal**：正常。
         * - **UploadFail**：上传失败。
         * @example `Normal`
         */
        Status: string;
        /**
         * 标签。
         * >仅当辅助媒资有标签信息时，才会返回此参数。
         * @example `tag1,tag2`
         */
        Tags: string;
        /**
         * 辅助媒资的最后更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-05-31T11:42:20Z`
         */
        ModificationTime: string;
        /**
         * 辅助媒资ID。
         * @example `0222e203cf80f9c22870a4d2c****`
         */
        MediaId: string;
        /**
         * 描述。
         * >仅当辅助媒资有描述信息时，才会返回此参数。
         * @example `描述测试`
         */
        Description: string;
        /**
         * 应用ID。
         * @example `app-*****`
         */
        AppId: string;
        /**
         * 辅助媒资的访问地址。
         * > 如果点播配置了CDN域名则为CDN地址，否则为OSS地址。
         * @example `https://al*****.cn/subtitle/9843C2*****4E186F19B6.vtt?auth_key=159099f60e0b7fd59****`
         */
        URL: string;
        /**
         * 标题。
         * @example `字幕测试`
         */
        Title: string;
        /**
         * 分类列表。
         */
        Categories: {
            /**
             * 父分类ID。
             * @example `1000224336`
             */
            ParentId: number;
            /**
             * 分类名称。
             * @example `测试`
             */
            CateName: string;
            /**
             * 分类ID。
             * @example `1000224338`
             */
            CateId: number;
            /**
             * 分类层级。
             * @example `0`
             */
            Level: number;
        }[];
    }[];
}
