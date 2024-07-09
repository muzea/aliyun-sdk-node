export interface DescribeLiveStreamPreloadTasksResponse {
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 每页大小。
     * @example `2`
     */
    PageSize: number;
    PreloadTasks: {
        /**
         * 直播预热详情。
         */
        PreloadTask: {
            /**
             * 预热区域。取值：
             * - domestic：中国内地。
             * - overseas：海外及港澳台加速。
             * - global：全球加速。
             * > 如果不传该参数，默认的预热区域为您的域名所配置的加速区域。
             * @example `domestic`
             */
            Area: string;
            /**
             * 预热任务创建时间。
             * @example `2016-06-29T19:00:00Z`
             */
            CreateTime: string;
            /**
             * 预热任务是否成功。取值：
             * - Successfully：成功。
             * - InternalError：失败。
             * @example `Successfully`
             */
            Description: string;
            /**
             * 播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 直播URL。
             * @example `rtmp://guide.aliyundoc.com/liveApp****​/liveStream****`
             */
            PlayUrl: string;
            /**
             * 预热结束时间。
             * @example `2016-06-30T19:00:00Z`
             */
            PreloadedEndTime: string;
            /**
             * 预热开始时间。
             * @example `2016-06-29T19:00:00Z`
             */
            PreloadedStartTime: string;
            /**
             * 进度百分比。
             * @example `100%`
             */
            Process: string;
            /**
             * 任务状态。取值：
             * - Success：成功。
             * - Failed：失败。
             * > 只要有一条任务创建失败即为失败
             * @example `Success`
             */
            Status: string;
            /**
             * 任务ID。
             * @example `yourTaskId`
             */
            TaskId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `E1564CBC-DCFE-5E1B-8B78-8DED9A39F334`
     */
    RequestId: string;
    /**
     * 符合条件的总个数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPage: number;
}
