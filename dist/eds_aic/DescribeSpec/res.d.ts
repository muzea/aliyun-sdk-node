export interface DescribeSpecResponse {
    /**
     * 请求ID。
     * @example `D9888DAD-331E-5FBC-B5A0-F2445115****`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****`
     */
    NextToken: string;
    /**
     * 规格信息。
     */
    SpecInfoModel: {
        /**
         * 规格ID。
         * @example `acp.basic.small`
         */
        SpecId: string;
        /**
         * CPU核数。
         * @example `8`
         */
        Core: number;
        /**
         * 内存大小。
         * @example `16`
         */
        Memory: number;
        /**
         * 系统盘大小，单位：GB。
         * @example `32`
         */
        SystemDiskSize: number;
        /**
         * 规格类型。
         * @example `ARM`
         */
        SpecType: string;
        /**
         * 规格状态。
         * @example `Available`
         */
        SpecStatus: string;
    }[];
}
