export interface ListEnvsResponse {
    /**
     * 查询到的环境总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 返回环境数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回第N页环境信息。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 环境列表
     */
    Envs: {
        /**
         * 创建时间。
         * @example `1637053715165`
         */
        CreateTime: number;
        /**
         * 运行中的场景ID。
         */
        RunningScenes: string[];
        /**
         * 所依赖的JMeter版本。
         * @example `5.0`
         */
        EnvVersion: string;
        /**
         * 修改时间。
         * @example `1637053719165`
         */
        ModifiedTime: number;
        /**
         * 包含的JAR包。
         */
        Files: {
            /**
             * 文件大小，单位为Byte。
             * @example `788`
             */
            FileSize: number;
            /**
             * JAR包的MD5值。
             * @example `43B584026CE5E570F3DE638FA7EEF9E0`
             */
            Md5: string;
            /**
             * 文件名。
             * @example `json.jar`
             */
            FileName: string;
            /**
             * 文件的OSS地址。
             * @example `https://test.oss-cn-shanghai.aliyuncs.com/json.jar`
             */
            FileOssAddress: string;
            /**
             * 文件ID。
             * @example `61660`
             */
            FileId: number;
        }[];
        /**
         * 关联的场景。
         */
        RelatedScenes: string[];
        /**
         * 环境文件的总大小。
         * @example `26668`
         */
        UsedCapacity: number;
        /**
         * 环境名。
         * @example `test-create`
         */
        EnvName: string;
        /**
         * 环境ID。
         * @example `86S1LH`
         */
        EnvId: string;
        /**
         * JMeter属性。
         */
        Properties: {
            /**
             * 属性名。
             * @example `remote_hosts`
             */
            Name: string;
            /**
             * 属性值。
             * @example `127.0.0.1`
             */
            Value: string;
            /**
             * 描述。
             * @example `远程主机`
             */
            Description: string;
        }[];
    }[];
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
