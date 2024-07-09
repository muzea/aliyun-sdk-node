export interface DescribeElasticQpsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2E7F7F7B-39A8-5D92-BAB4-D89D9DCE7D4F`
     */
    RequestId: string;
    /**
     * 弹性QPS列表。
     */
    ElasticQps: {
        /**
         * 正常业务QPS峰值。
         * @example `23`
         */
        MaxNormalQps: number;
        /**
         * 返回数据的索引。
         * @example `1`
         */
        Index: number;
        /**
         * 最大入QPS峰值。
         * @example `100`
         */
        MaxQps: number;
        /**
         * 步长内总请求数量。
         * @example `15104`
         */
        Pv: number;
        /**
         * 步长时间内总的回源请求数量。
         * @example `1223`
         */
        Ups: number;
        /**
         * 步长内2xx总量。
         * @example `455`
         */
        Status2: number;
        /**
         * 步长内3xx总量。
         * @example `100`
         */
        Status3: number;
        /**
         * 步长内4xx总量。
         * @example `34`
         */
        Status4: number;
        /**
         * 步长内5xx总量。
         * @example `0`
         */
        Status5: number;
    }[];
}
