export interface GetVideoListResponse {
    /**
     * 音/视频总条数。
     * @example `100`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    VideoList: {
        /**
         * 获取音/视频信息列表。最大支持获取前5000条。
         */
        Video: {
            /**
             * 音/视频存储地址。
             * @example `out-****.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 视频状态。取值：
             * - **Uploading**：上传中。
             * - **UploadFail**：上传失败。
             * - **UploadSucc**：上传完成。
             * - **Transcoding**：转码中。
             * - **TranscodeFail**：转码失败。
             * - **Checking**：审核中。
             * - **Blocked**：屏蔽。
             * - **Normal**：正常。
             * - **ProduceFail**：合成失败。
             * 各视频状态的具体含义解释及相关限制，请参见[Status：视频状态](~~52839#section-p7c-jgy-070~~)。
             * @example `Normal`
             */
            Status: string;
            /**
             * 音/视频创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-11-14T09:15:50Z`
             */
            CreationTime: string;
            /**
             * 分类ID。
             * @example `781111`
             */
            CateId: number;
            /**
             * 音/视频ID。
             * @example `9ae2af636ca6c10412f44891fc****`
             */
            VideoId: string;
            /**
             * 音/视频标签。多个用半角逗号（,）分隔。
             * @example `标签1, 标签2`
             */
            Tags: string;
            /**
             * 视频更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-11-14T09:16:50Z`
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
             * 应用ID。默认取值：**app-1000000**。
             * @example `app-1000000`
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
             * 音/视频时长。单位：秒。
             * @example `135.6`
             */
            Duration: number;
            /**
             * 音/视频标题。
             * @example `阿里云VOD视频标题`
             */
            Title: string;
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
        }[];
    };
}
