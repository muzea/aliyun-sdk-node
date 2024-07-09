export interface GetHistogramsResponse {
    /**
     * 直方图数据。
     */
    Data: {
        /**
         * 服务器名称。
         * @example `nginx`
         */
        Server: string;
        /**
         * 该子时间区间内查询到的日志条数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 具体日志分布情况。
         */
        Histograms: {
            /**
             * 子时间区间的开始时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
             * @example `1409529600`
             */
            From: number;
            /**
             * 子时间区间的结束时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
             * @example `1409569200`
             */
            To: number;
            /**
             * 子时间区间的日志数量。
             * @example `100`
             */
            Count: number;
            /**
             * 当前查询结果在该子时间区间内的结果是否完整。取值：
             * - true：查询已经完成，返回结果为完整结果。
             * - false：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。
             * @example `true`
             */
            CompletedOrNot: boolean;
        }[];
    };
    /**
     * 请求消息ID。
     * @example `97A31C3A-3F9F-5866-8979-5159E3DC****`
     */
    RequestId: string;
}
