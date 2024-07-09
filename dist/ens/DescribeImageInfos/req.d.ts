export interface DescribeImageInfosRequest {
    /**
     * 系统类型，仅支持传单个类型。不传值，默认查询全部。
     * 取值：
     * - linux
     * - windows
     * @example `linux`
     */
    "OsType"?: string;
}
