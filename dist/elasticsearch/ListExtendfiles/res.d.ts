export interface ListExtendfilesResponse {
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
         * 扩展文件路径。
         * @example `/ssd/1/share/ls-cn-oew1qbgl****​/logstash/current/config/custom/mysql-connector-java-5.1.35.jar`
         */
        filePath: string;
        /**
         * 扩展文件大小。
         * @example `968668`
         */
        fileSize: number;
        /**
         * 扩展文件名称。
         * @example `mysql-connector-java-5.1.35.jar`
         */
        name: string;
        /**
         * 来源类型。
         * @example `ORIGIN`
         */
        sourceType: string;
    }[];
}
