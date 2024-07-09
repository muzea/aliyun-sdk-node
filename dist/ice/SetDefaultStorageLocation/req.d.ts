export interface SetDefaultStorageLocationRequest {
    /**
     * 存储类型：
     * - vod\_oss\_bucket: vod托管Bucket。
     * 支持添加点播系统Bucket和在点播系统中添加的OSS自有Bucket。如果没有可用的，您也可以到视频点播控制台新增Bucket，视频点播系统会在每一个存储地域分配一个存储地址，开通视频点播服务后需要启用该地址才能使用，详细操作请参见[管理存储Bucket](~~86097~~)。
     * - user\_oss\_bucket: 用户私有Bucket。添加对象存储地址前，您需要开通对象存储OSS服务并创建存储Bucket，详细操作请参见[控制台创建存储空间](~~31885~~)。
     * @example `user_oss_bucket`
     */
    "StorageType"?: string;
    /**
     * 您创建的OSS的Bucket名称。
     * @example `oss-test-bucket`
     */
    "Bucket"?: string;
    /**
     * - 当storageType为user_oss_bucket时，临时文件会被存储到这个路径下，path为空或/时表示存储在根目录。
     * - 对于vod存储该字段不生效。
     * @example `ims/dir`
     */
    "Path"?: string;
}
