export interface SearchPublicMediaInfoResponse {
    /**
     * 请求ID
     * @example `****3CFB-2767-54FD-B311-BD15A4C1****`
     */
    RequestId: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 公共版权媒资信息
     */
    PublicMediaInfos: {
        /**
         * 是否已购买包含该媒资的资源包。
         * @example `true`
         */
        Authorized: boolean;
        /**
         * 是否收藏了该媒资。
         * @example `true`
         */
        Favorite: boolean;
        /**
         * 资源包剩余有效时间（天）
         * @example `100`
         */
        RemainingAuthTime: string;
        /**
         * 媒资信息
         */
        MediaInfo: {
            /**
             * 媒资ID
             * @example `icepublic-****87b921bb4a55908a72a0537e****`
             */
            MediaId: string;
            /**
             * BasicInfo
             */
            MediaBasicInfo: {
                /**
                 * MediaId
                 * @example `icepublic-****87b921bb4a55908a72a0537e****`
                 */
                MediaId: string;
                /**
                 * 媒资媒体类型
                 * @example `audio`
                 */
                MediaType: string;
                /**
                 * 媒资业务类型
                 * @example `general`
                 */
                BusinessType: string;
                /**
                 * 来源
                 * @example `oss`
                 */
                Source: string;
                /**
                 * 标题
                 * @example `title`
                 */
                Title: string;
                /**
                 * 内容描述
                 * @example `description`
                 */
                Description: string;
                /**
                 * 分类
                 * @example `category`
                 */
                Category: string;
                /**
                 * 标签
                 * @example `标签,tag1`
                 */
                MediaTags: string;
                /**
                 * 封面地址
                 * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
                 */
                CoverURL: string;
                /**
                 * 用户数据
                 * @example `userDataTest`
                 */
                UserData: string;
                /**
                 * 资源状态
                 * @example `Normal`
                 */
                Status: string;
                /**
                 * 媒资创建时间
                 * @example `2020-12-26T06:04:49Z`
                 */
                CreateTime: string;
                /**
                 * 媒资修改时间
                 * @example `2020-12-26T06:04:50Z`
                 */
                ModifiedTime: string;
                /**
                 * 媒资删除时间
                 * @example `2020-12-29T06:04:49Z`
                 */
                DeletedTime: string;
                /**
                 * 雪碧图
                 * @example `[{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]`
                 */
                SpriteImages: string;
            };
            /**
             * 动态元数据
             */
            DynamicMetaData: {
                /**
                 * 元数据json string
                 * @example `"{\"AuditionUrl\": \"http://xxx\", \"AuditionCount\": 3...}"`
                 */
                Data: string;
                /**
                 * 类型。取值范围：
                 * - "ai": AI原始结果统一化处理后的AI数据
                 * - "user-defined": 用户自定义元数据
                 * - "system": 系统自带
                 * @example `system`
                 */
                Type: string;
            };
        };
    }[];
}
