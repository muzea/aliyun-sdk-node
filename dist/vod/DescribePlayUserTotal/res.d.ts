export interface DescribePlayUserTotalResponse {
    /**
     * 请求ID。
     * @example `1FAFB884-D5A7-47D1-****-8928AA9C8720`
     */
    RequestId: string;
    UserPlayStatisTotals: {
        /**
         * 用户每天播放总量统计数据。
         */
        UserPlayStatisTotal: {
            /**
             * 播放日期，格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2016-06-30T13:00:00Z`
             */
            Date: string;
            /**
             * 播放总时长。单位：毫秒。
             * @example `9340070`
             */
            PlayDuration: string;
            /**
             * 播放时长分布。
             * @example `"<=1m:74.3%;>1<=5m:22.8%;>5<=10m:1.0%;>10<=15m:1.0%;>15<=30m:1.0%"`
             */
            PlayRange: string;
            /**
             * 播放次数总量统计。
             */
            VV: {
                /**
                 * Flash播放器播放总次数。
                 * @example `2`
                 */
                Flash: string;
                /**
                 * iOS播放器播放总次数。
                 * @example `0`
                 */
                iOS: string;
                /**
                 * HTML5播放器播放总次数。
                 * @example `2`
                 */
                HTML5: string;
                /**
                 * Android播放器播放总次数。
                 * @example `161`
                 */
                Android: string;
            };
            /**
             * 播放用户数总量统计。
             */
            UV: {
                /**
                 * Flash播放器播放总用户数。
                 * @example `1`
                 */
                Flash: string;
                /**
                 * iOS播放器播放总用户数。
                 * @example `0`
                 */
                iOS: string;
                /**
                 * HTML5播放器播放总用户数。
                 * @example `1`
                 */
                HTML5: string;
                /**
                 * Android播放器播放总用户数。
                 * @example `2`
                 */
                Android: string;
            };
        }[];
    };
}
