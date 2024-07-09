export interface DescribeCustinsResourceInfoResponse {
    /**
     * 请求ID。
     * @example `D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 最大每秒IO请求次数。
         * @example `100`
         */
        MaxIopsIncreaseRatio: string;
        /**
         * 最大并发连接数。
         * @example `20`
         */
        MaxConnIncreaseRatioValue: string;
        /**
         * 内存调整截止日期。
         * @example `2023-10-25`
         */
        MemoryAdjustDeadline: string;
        /**
         * 待评估资源的最大值。
         * @example `200`
         */
        MemAdjustableMaxValue: string;
        /**
         * 最大每秒IO请求次数。
         * @example `20`
         */
        IopsAdjustableMaxValue: string;
        /**
         * CPU使用率.
         * @example `10`
         */
        CpuIncreaseRatio: string;
        /**
         * 最大每秒IO请求次数。
         * @example `20`
         */
        MaxIopsIncreaseRatioValue: string;
        /**
         * 最大并发连接数。
         * @example `30`
         */
        OriginMaxConn: string;
        /**
         * 内存使用量，单位：mb。
         * @example `200`
         */
        MemoryIncreaseRatioValue: string;
        /**
         * 最大并发连接数。
         * @example `100`
         */
        MaxConnIncreaseRatio: string;
        /**
         * CPU使用率。单位：%。
         * @example `20`
         */
        CpuIncreaseRatioValue: string;
        /**
         * 最大每秒IO请求次数。
         * @example `20`
         */
        OriginMaxIops: string;
        /**
         * 最大并发连接数。
         * @example `100`
         */
        MaxConnAdjustableMaxValue: string;
        /**
         * 最大连接调整截止日期
         * @example `2023-10-25
        `
         */
        MaxConnAdjustDeadline: string;
        /**
         * 最大IOPS调整截止日期
         * @example `2023-10-25
        `
         */
        MaxIopsAdjustDeadline: string;
        /**
         * 实际使用的内存。单位：mb。
         * @example `20`
         */
        OriginMemory: string;
        /**
         * 内存可调最大比率。
         * @example `60`
         */
        MemAdjustableMaxRatio: string;
        /**
         * 最大CPU使用率。
         * @example `60`
         */
        CpuAdjustableMaxValue: string;
        /**
         * CPU可调最大比率
         * @example `30`
         */
        CpuAdjustableMaxRatio: string;
        /**
         * CPU调整截止日期
         * @example `2023-10-25`
         */
        CpuAdjustDeadline: string;
        /**
         * 内存增加率
         * @example `20`
         */
        MemoryIncreaseRatio: string;
        /**
         * 实例CPU数量。
         * @example `2`
         */
        OriginCpu: string;
        /**
         * 实例ID。
         * @example ` rm-wz9s06u4drm******`
         */
        DBInstanceId: string;
    }[];
}
