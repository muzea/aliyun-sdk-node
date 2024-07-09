export interface GetVideoListResponse {
    /**
     * Id of the request。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 是否请求成功。取值：
     * - true： 成功
     * - false：失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 符合条件的媒资总数。
     * @example `163`
     */
    Total: number;
    /**
     * 媒资信息列表。
     */
    MediaList: {
        /**
         * 存储地址。
         * @example `out-****.oss-cn-shanghai.aliyuncs.com`
         */
        StorageLocation: string;
        /**
         * 视频状态。
         * @example `Normal`
         */
        Status: string;
        /**
         * 创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2017-11-14T09:15:50Z`
         */
        CreationTime: string;
        /**
         * 分类ID。
         * @example `3679`
         */
        CateId: number;
        /**
         * 媒资ID。
         * @example `1c6ce34007d571ed94667630a6bc****`
         */
        MediaId: string;
        /**
         * 标签列表。
         * @example `标签1, 标签2`
         */
        Tags: string;
        /**
         * 更新时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2017-11-14T09:16:50Z`
         */
        ModificationTime: string;
        /**
         * 分类名称。
         * @example `分类1`
         */
        CateName: string;
        /**
         * 描述。
         * @example `阿里云VOD视频描述`
         */
        Description: string;
        /**
         * 应用ID。默认取值：app-1000000
         * @example `app-1000000`
         */
        AppId: string;
        /**
         * 源文件大小。单位：字节。
         * @example `10897890`
         */
        Size: number;
        /**
         * 封面URL。
         * @example `http://example.aliyundoc.com/snapshot/****.jpg?auth_key=1498476426-0-0-f00b9455c49a423ce69cf4e27333****`
         */
        CoverUrl: string;
        /**
         * 时长。单位：秒。
         * @example `135.6`
         */
        Duration: number;
        /**
         * 标题。
         * @example `史上最牛音乐播放器`
         */
        Title: string;
        /**
         * 视频截图URL数组。
         */
        Snapshots: string[];
    }[];
}
