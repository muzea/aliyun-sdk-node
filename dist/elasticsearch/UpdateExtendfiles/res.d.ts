export interface UpdateExtendfilesResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 扩展文件大小，单位：Byte。
         * @example `1853083`
         */
        fileSize: number;
        /**
         * 扩展文件名称。
         * @example `mysql-connector-java-6.0.2.jar`
         */
        name: string;
        /**
         * 扩展文件来源，仅支持ORIGIN（保留的原有扩展文件）。
         * @example `ORIGIN`
         */
        sourceType: string;
    }[];
}
