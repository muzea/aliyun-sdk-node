export interface ListAIImageInfoResponse {
    /**
     * 请求ID。
     * @example `D73420CD-D221-9122-5B8FA995A511****`
     */
    RequestId: string;
    /**
     * AI图片文件列表。
     */
    AIImageInfoList: {
        /**
         * 数据创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-10-15T03:30:03Z`
         */
        CreationTime: string;
        /**
         * 图片数据信息ID。
         * @example `b89a6aabf1b6197ebd6fe6cf29****`
         */
        AIImageInfoId: string;
        /**
         * AI图片文件地址。
         * @example `http://example.aliyundoc.com/357a8748c5789d2726e6436aa****​/image/ai/b0a7612554d6400013-0****.gif?auth_key=1602745717-0-0-005ee05616c5925596d****`
         */
        FileURL: string;
        /**
         * 数据版本ID。
         * @example `b547f3f0e199c3b457369f3cf****`
         */
        Version: string;
        /**
         * 视频ID。
         * @example `357a8748c5789d2726e6436aa****`
         */
        VideoId: string;
        /**
         * AI图片处理任务ID。
         * @example `cf08a2c6e11ee1711b738b9067****`
         */
        JobId: string;
        /**
         * 图片评分。
         * @example `5.035636554444242`
         */
        Score: string;
        /**
         * 图片格式。取值：**gif**或**png**。
         * @example `gif`
         */
        Format: string;
    }[];
}
