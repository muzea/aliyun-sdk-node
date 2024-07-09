export interface DescribeDocTypesResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `769FB3C1-F4C9-4******`
     */
    RequestId: string;
    /**
     * 结果中的OSS文件类型列表。
     */
    DocTypeList: {
        /**
         * 文件类型编码。
         * @example `100001`
         */
        Code: number;
        /**
         * 文件类型名称。
         * @example `C/C++ Source Code`
         */
        Name: string;
        /**
         * 文件类型的唯一ID。
         * @example `1`
         */
        Id: number;
    }[];
}
