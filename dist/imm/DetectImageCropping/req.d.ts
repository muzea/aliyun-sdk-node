export interface DetectImageCroppingRequest {
    /**
     * 项目名称。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 图片的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://imm-test/testcases/facetest.jpg`
     */
    "SourceURI"?: string;
    /**
     * 裁剪比例列表。最多可设置5个比例，单个裁剪比例要求如下。
     * - 比例必须为整数比例，取值范围为（0，20）。
     * - 比例范围必须控制在\[0.5，2]之间。
     * - 不填写此参数时，默认按照`["auto"]`处理。
     * > 以下情况会出现报错提示：<br>-设置的比例大于5个。<br>-传入的列表为空。<br>-比例不为整数，例如`4.1:3`。<br>-比例范围小于0.5或大于2。
     * @example `["1:1"]`
     */
    "AspectRatios"?: string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
