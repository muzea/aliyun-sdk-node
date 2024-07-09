export interface GetVideoInfoResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 音/视频信息。
     */
    Video: {
        /**
         * 音/视频存储地址。
         * @example `out-201703232251****.oss-cn-shanghai.aliyuncs.com`
         */
        StorageLocation: string;
        /**
         * 音/视频创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-11-14T09:15:50Z`
         */
        CreationTime: string;
        /**
         * 音/视频状态。各状态可执行的操作及使用限制等详细信息，请参见[Status：音视频状态](~~52839#title-vqg-8cz-7p8~~)。取值：
         * - **Uploading**：上传中。
         * - **UploadFail**：上传失败。
         * - **UploadSucc**：上传完成。
         * - **Transcoding**：转码中。
         * - **TranscodeFail**：转码失败。
         * - **Blocked**：屏蔽。
         * - **Normal**：正常。
         * @example `Normal`
         */
        Status: string;
        /**
         * 分类ID。
         * @example `781111****`
         */
        CateId: number;
        /**
         * 音/视频ID。
         * @example `9b73864d75f1d231e9001cd5f8****`
         */
        VideoId: string;
        /**
         * 离线下载开关状态，打开离线下载功能后，则允许移动端用户通过阿里云播放器将视频缓存至本地观看。具体操作，请参见[离线下载](~~86107~~)。取值：
         * - **on**：开启，允许离线下载。
         * - **off**：关闭，禁止离线下载。
         * @example `on`
         */
        DownloadSwitch: string;
        /**
         * 音/视频标签。多个标签之间使用半角逗号（,）分隔。
         * @example `标签1, 标签2`
         */
        Tags: string;
        /**
         * 音/视频的最后更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-11-14T10:15:50Z`
         */
        ModificationTime: string;
        /**
         * 音/视频存储所在地域。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 自定义媒资信息。
         * > 该参数已废弃，调用API已不会返回该参数。
         * @example `{"aaa":"test"}`
         */
        CustomMediaInfo: string;
        /**
         * 分类名称。
         * @example `分类名`
         */
        CateName: string;
        /**
         * 音/视频描述。
         * @example `阿里云VOD视频描述`
         */
        Description: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 音/视频源文件大小。单位：字节。
         * @example `10897890`
         */
        Size: number;
        /**
         * 音/视频封面URL。
         * @example `https://example.aliyundoc.com/****.jpg`
         */
        CoverURL: string;
        /**
         * 转码模板组ID。
         * @example `9ae2af636ca64835b0c10412f448****`
         */
        TemplateGroupId: string;
        /**
         * 音/视频时长。单位：秒。
         * @example `135.6`
         */
        Duration: number;
        /**
         * 音/视频标题。
         * @example `阿里云VOD视频标题`
         */
        Title: string;
        /**
         * 音/视频的终审结果。取值：
         * - **Normal**：通过。
         * - **Blocked**：屏蔽。
         * @example `Normal`
         */
        AuditStatus: string;
        Snapshots: {
            /**
             * 视频截图URL数组。
             */
            Snapshot: string[];
        };
        /**
         * 媒资存储类型。取值：
         * - **Standard**：标准。
         * - **IA**：媒资低频。
         * - **Archive**：媒资归档。
         * - **ColdArchive**：媒资冷归档。
         * - **SourceIA**：源文件低频。
         * - **SourceArchive**：源文件归档。
         * - **SourceColdArchive**：源文件冷归档。
         * - **Changing**：媒资存储类型变更中。
         * - **SourceChanging**：源文件存储类型变更中。
         * @example `Standard`
         */
        StorageClass: string;
        /**
         * 媒资解冻状态。取值：
         * - **Processing**：解冻中。
         * - **Success**：解冻成功。
         * - **Failed**：解冻失败。
         * @example `Success`
         */
        RestoreStatus: string;
        /**
         * 媒资解冻有效期。
         * @example `2023-03-30T10:14:14Z`
         */
        RestoreExpiration: string;
    };
}
