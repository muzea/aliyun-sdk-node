export interface DescribeLiveDetectPornDataResponse {
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    DetectPornData: {
        /**
         * 每个时间间隔的网络带宽数据。
         */
        DataModule: {
            /**
             * 主播流域名。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 域名所属地域。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 播流所属应用名称。
             * @example `liveApp****`
             */
            App: string;
            /**
             * 播流名称。
             * @example `liveStream****`
             */
            Stream: string;
            /**
             * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-12-10T15:00:05Z`
             */
            TimeStamp: string;
            /**
             * 审核数量。
             * @example `2`
             */
            Count: number;
            /**
             * 检测场景。取值：
             * - **porn**（默认值）：鉴黄。
             * - **terrorism**：暴恐涉政。
             * - **ad**：图文违规。
             * - **live**：不良直播场景。
             * - **logo**：logo检测。
             * @example `porn`
             */
            Scene: string;
            /**
             * 用户每天拥有免费的图片扫描额度。取值：
             * - **free**
             * - **charge**
             * @example `free`
             */
            Fee: string;
        }[];
    };
}
