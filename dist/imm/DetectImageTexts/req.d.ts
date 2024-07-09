export interface DetectImageTextsRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 文件的存储位置。
     * OSS 地址规则为 oss://${Bucket}/${Object}，其中${Bucket}为和当前项目处于同一区域(Region)的 OSS Bucket 名称，${Object}为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object.jpg`
     */
    "SourceURI": string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
