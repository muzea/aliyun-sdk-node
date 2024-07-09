export interface DeleteMediaInfosRequest {
    /**
     * IMS 媒资ID
     * - 多个用英文逗号分隔。
     * 若MediaIds 字段为空，则InputURLs字段必须不为空。
     * @example `****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****`
     */
    "MediaIds"?: string;
    /**
     * 待删除的媒资在相应系统中的地址，该地址对应的文件需要先在IMS中注册，多个URL用英文逗号分隔。
     * 支持两种格式
     * 1. http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?
     * 2. OSS://example-bucket/example.mp4?
     * 此格式默认OSS region与服务接入区域一致
     * @example `http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4? 或者 oss://example-bucket/example.mp4?`
     */
    "InputURLs"?: string;
    /**
     * 是否删除媒资的物理文件。
     * 若媒资的存储地址是用户自有oss，需对服务角色AliyunICEDefaultRole提前进行授权，具体操作请参见[删除录制文件说明（OSS授权管理）](https://help.aliyun.com/zh/ims/user-guide/record?spm=a2c4g.11186623.0.i8#0737d9c437bmn)。
     * @example `false`
     */
    "DeletePhysicalFiles"?: boolean;
}
