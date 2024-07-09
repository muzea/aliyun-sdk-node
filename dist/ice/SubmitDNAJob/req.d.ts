export interface SubmitDNAJobRequest {
    /**
     * 输入DNA文件。
     */
    "Input": {
        /**
         * 输入文件类型，取值：
         * 1. OSS：OSS文件地址
         * 2. Media：媒资ID
         * @example `Media`
         */
        Type: string;
        /**
         * 输入文件信息，支持OSS地址和媒资ID两种。
         * OSS地址规则为：
         * 1、oss://bucket/object
         * 2、http(s)://bucket.oss-[regionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
         * @example `1b1b9cd148034739af413150fded****`
         */
        Media: string;
    };
    /**
     * 管道ID。
     * @example `5246b8d12a62433ab77845074039****`
     */
    "PipelineId"?: string;
    /**
     * DNA配置，JSON对象。
     * 若填写，会覆盖模板参数。
     * @example `{"SaveType": "save","MediaType":"video"}`
     */
    "Config"?: string;
    /**
     * 模版ID。
     * @example `S00000101-100060`
     */
    "TemplateId"?: string;
    /**
     * 用户自定义数据，最大长度128个字节。
     * @example `userData`
     */
    "UserData"?: string;
    /**
     * 唯一的视频主键，唯一性由用户保证。
     * @example `3ca84a39a9024f19853b21be9cf9****`
     */
    "PrimaryKey": string;
    /**
     * DNA库ID。如果不传，则使用默认DNA库。如需创建DNA库，请参见[CreateDNADB - 创建DNA库](~~479275~~)。
     * @example `2288c6ca184c0e47098a5b665e2a12****`
     */
    "DBId": string;
}
