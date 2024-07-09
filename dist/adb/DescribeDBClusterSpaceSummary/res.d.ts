export interface DescribeDBClusterSpaceSummaryResponse {
    /**
     * 请求ID。
     * @example `25B56BC7-4978-40B3-9E48-4B7067******`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 总数据量，单位：Byte。
         * > 计算公式为：总数据量 = 热数据总量 + 冷数据总量。
         * @example `8388608`
         */
        TotalSize: string;
        /**
         * 热数据。
         */
        HotData: {
            /**
             * 热数据总量，单位：Byte。
             * > 计算公式为：热数据总量 = 表记录数据量 + 普通索引数据量 + 主键索引数据量 + 其他
             * @example `4194304`
             */
            TotalSize: number;
            /**
             * 表记录数据量，单位：Byte。
             * @example `1048576`
             */
            DataSize: number;
            /**
             * 普通索引数据量，单位：Byte。
             * @example `1048576`
             */
            IndexSize: number;
            /**
             * 主键索引数据量，单位：Byte。
             * @example `1048576`
             */
            PrimaryKeyIndexSize: number;
            /**
             * 其他，单位：Byte。
             * @example `1048576`
             */
            OtherSize: number;
        };
        /**
         * 冷数据。
         */
        ColdData: {
            /**
             * 冷数据总量，单位：Byte。
             * > 计算公式为：冷数据总量 = 表记录数据量 + 普通索引数据量 + 主键索引数据量 + 其他。
             * @example `4194304`
             */
            TotalSize: number;
            /**
             * 表记录数据量，单位：Byte。
             * @example `1048576`
             */
            DataSize: number;
            /**
             * 普通索引数据量，单位：Byte。
             * @example `1048576`
             */
            IndexSize: number;
            /**
             * 主键索引数据量，单位：Byte。
             * @example `1048576`
             */
            PrimaryKeyIndexSize: number;
            /**
             * 其他，单位：Byte。
             * @example `1048576`
             */
            OtherSize: number;
        };
        /**
         * 数据增长量。
         */
        DataGrowth: {
            /**
             * 近1天增长量，单位：Byte。
             * > 计算公式为：近1天增长量 = 当前总数据量 - 1天前总数据量。
             * @example `1048576`
             */
            DayGrowth: number;
            /**
             * 近7天日均增长量，单位：Byte。
             * > 计算公式为：近7天日均增长量 = (当前总数据量 - 7天前总数据量) / 7。
             * @example `1048576`
             */
            WeekGrowth: number;
        };
    };
}
