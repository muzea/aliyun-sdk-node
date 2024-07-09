export interface GetUploadDetailsResponse {
    /**
     * 请求ID。
     * @example `9E290613-04F4-47F4-795D30732077****`
     */
    RequestId: string;
    /**
     * 禁止访问的媒体ID。
     */
    ForbiddenMediaIds: string[];
    /**
     * 不存在的媒体ID。
     */
    NonExistMediaIds: string[];
    /**
     * 上传详情列表。
     */
    UploadDetails: {
        /**
         * 视频状态。具体的视频状态取值及描述，请参见[Status：视频状态](~~52839~~)的取值列表。
         * @example `Uploading`
         */
        Status: string;
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-04-28T09:42:07Z`
         */
        CreationTime: string;
        /**
         * 上传资源。
         * @example `WebSDK`
         */
        UploadSource: string;
        /**
         * 上传IP地址。
         * @example `192.168.0.1`
         */
        UploadIP: string;
        /**
         * 设备模型。
         * @example `Chrome`
         */
        DeviceModel: string;
        /**
         * 更新时间。格式为：_yyyy-MM-ddTHH:mm:ssZ_（UTC时间）。
         * @example `2019-04-28T09:43:12Z`
         */
        ModificationTime: string;
        /**
         * 完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-04-28T09:45:07Z`
         */
        CompletionTime: string;
        /**
         * 上传的音/视频ID。
         * @example `61ccbdb06fa83012be4d8083f6****`
         */
        MediaId: string;
        /**
         * 上传大小。单位：字节。
         * @example `346`
         */
        UploadSize: number;
        /**
         * 上传比率。
         * @example `0.038`
         */
        UploadRatio: number;
        /**
         * 上传任务状态。具体的上传状态取值及描述，请参见[Status：URL上传任务状态](~~52839~~)的取值列表。
         * @example `Uploading`
         */
        UploadStatus: string;
        /**
         * 标题。
         * @example `测试文件上传详情`
         */
        Title: string;
        /**
         * 文件大小。单位：字节。
         * @example `46`
         */
        FileSize: number;
    }[];
}
