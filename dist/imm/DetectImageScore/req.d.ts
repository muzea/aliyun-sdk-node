export interface DetectImageScoreRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~477051~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 源图片的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域（Region）的OSS Bucket 名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://examplebucket/sampleobject.jpg`
     */
    "SourceURI"?: string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
