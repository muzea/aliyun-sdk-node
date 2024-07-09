export interface GetDoctorComputeSummaryResponse {
    /**
     * 资源使用详情。
     */
    Data: {
        /**
         * 指标数据。
         */
        Metrics: {
            /**
             * 资源CPU使用总量。
             */
            VcoreSeconds: {
                /**
                 * 指标名称。
                 * @example `vcoreSeconds
                `
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1231412`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `VCores * Sec
                `
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total vcore usage over time in seconds
                `
                 */
                Description: string;
            };
            /**
             * 资源内存使用总量。
             */
            MemSeconds: {
                /**
                 * 指标名称。
                 * @example `memSeconds
                `
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `12312312`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB * Sec
                `
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total memory usage over time in seconds
                `
                 */
                Description: string;
            };
            /**
             * 资源平均CPU使用率。同Linux Top的%CPU含义。
             */
            VcoreUtilization: {
                /**
                 * 指标名称。
                 * @example `vcoreUtilization
                `
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `32.1
                `
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”
                `
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of used vcore to total available cores
                `
                 */
                Description: string;
            };
            /**
             * 资源平均内存利用率。
             */
            MemUtilization: {
                /**
                 * 指标名称。
                 * @example `memUtilization
                `
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.82`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of used memory to total available memory
                `
                 */
                Description: string;
            };
            /**
             * 资源CPU使用总量日环比。
             */
            VcoreSecondsDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `vcoreSecondsDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.22`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Growth ratio of virtual core usage in seconds per day`
                 */
                Description: string;
            };
            /**
             * 资源内存使用总量日环比。
             */
            MemSecondsDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `memSecondsDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.36`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Growth ratio of memory usage in seconds per day`
                 */
                Description: string;
            };
            /**
             * 资源读取文件系统总量。
             */
            ReadSize: {
                /**
                 * 指标名称。
                 * @example `readSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `504888659968`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total cumulative size of data read in megabytes (MB)`
                 */
                Description: string;
            };
            /**
             * 资源写入文件系统总量。
             */
            WriteSize: {
                /**
                 * 指标名称。
                 * @example `writeSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `6294093393920`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total cumulative size of data written in megabytes (MB)`
                 */
                Description: string;
            };
        };
        /**
         * 资源分析。
         */
        Analysis: {
            /**
             * 健康任务总数。
             * @example `3`
             */
            HealthyJobCount: number;
            /**
             * 亚健康任务总数。
             * @example `1123`
             */
            SubHealthyJobCount: number;
            /**
             * 不健康任务总数。
             * @example `23`
             */
            UnhealthyJobCount: number;
            /**
             * 需要关注的任务总数。
             * @example `234`
             */
            NeedAttentionJobCount: number;
            /**
             * 资源任务评分。
             * @example `73`
             */
            Score: number;
            /**
             * 资源任务评分日环比。
             * @example `0.02`
             */
            ScoreDayGrowthRatio: number;
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
