export interface FetchImageTaskResponse {
    /**
     * 请求唯一标识
     * @example `DD656AF9-0839-521A-A3D2-F320009F9C87`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 智能配图生成的图片信息
         */
        TaskInfoList: {
            /**
             * 段落ID
             * @example `1`
             */
            Id: number;
            /**
             * 任务ID 任务唯一标识
             * @example `net-7eb32699000d4193a3c59fc64ae1e55f`
             */
            TaskId: string;
            /**
             * 当前任务状态 SUCCESSED=任务执行成功 ，FAILED=任务执行失败 ，CANCELED=任务被取消 ，PENDIN=任务排队中 ，SUSPENDE=任务挂起 RUNNIN=任务处理中
             * @example `SUCCESSED`
             */
            TaskStatus: string;
            /**
             * 图片信息
             */
            ImageList: {
                /**
                 * 图片地址
                 * @example `https://a-hbr-temp-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/r-000aham3nsx9gc7a8r5l.csv?Expires=167826013`
                 */
                Url: string;
                /**
                 * 如果图片没有生成返回的异常code标识
                 * @example `NoData`
                 */
                Code: string;
                /**
                 * 如果图片没有生成返回的异常信息描述
                 * @example `错误`
                 */
                Message: string;
            }[];
        }[];
    };
}
