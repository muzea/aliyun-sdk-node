export interface GetVideoInfosResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 不存在的音/视频ID列表。
     */
    NonExistVideoIds: string[];
    /**
     * 音/视频信息列表。
     */
    VideoList: {
        /**
         * 音/视频存储地址。
         * @example `out-****.oss-cn-shanghai.aliyuncs.com`
         */
        StorageLocation: string;
        /**
         * 音/视频创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-06-26T05:38:48Z`
         */
        CreationTime: string;
        /**
         * 视频状态。取值：
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
         * @example `7753d144efd74d6c45fe0570****`
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
         * 音/视频的最后一次更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-06-26T06:38:48Z`
         */
        ModificationTime: string;
        /**
         * 分类名称。
         * @example `分类名称`
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
         * @example `453`
         */
        Size: number;
        /**
         * 音/视频封面URL。
         * @example `https://example.aliyundoc.com/****.jpg`
         */
        CoverURL: string;
        /**
         * 转码模板组ID。
         * @example `b4039216985f4312a5382a4ed****`
         */
        TemplateGroupId: string;
        /**
         * 音/视频时长。单位：秒。
         * @example `120`
         */
        Duration: number;
        /**
         * 音/视频标题。
         * @example `阿里云VOD视频标题`
         */
        Title: string;
        /**
         * 视频截图URL数组。
         */
        Snapshots: string[];
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
    }[];
}
