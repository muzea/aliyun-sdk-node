export interface DetectImageLabelsRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 图片的OSS URI。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object.jpg`
     */
    "SourceURI": string;
    /**
     * 标签置信度过滤阈值，返回结果不包含置信度小于该设定阈值的标签。取值范围为0~1。如果不配置，则使用算法内部的默认值。
     * @example `0.7`
     */
    "Threshold"?: number;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
