export interface ListDictInformationRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 词典文件所在的OSS存储空间（Bucket）名称。
     * @example `search-cloud-test-cn-****`
     */
    "bucketName": string;
    /**
     * 词典文件在OSS Bucket中的存储路径。
     * @example `oss/dic_0.dic`
     */
    "key": string;
    /**
     * 用户待添加的OSS词典类型。支持IK_HOT、IK、SYNONYMS、ALIWS四种类型。默认值：IK
     * @example `ALIWS`
     */
    "analyzerType"?: string;
}
