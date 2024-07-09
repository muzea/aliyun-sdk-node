export interface EncodeBlindWatermarkRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 图片的OSS URI。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * 支持图片格式：jpg, png, bmp, tiff, webp
     * 图片大小限制：长宽最小80px ，最大10000px
     * @example `oss://test-bucket/test-object.jpg`
     */
    "SourceURI": string;
    /**
     * 输出图片存储的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/target-object.jpg`
     */
    "TargetURI": string;
    /**
     * 作为水印的文字内容，最多256个字符。
     * @example `阿里云版权所有`
     */
    "Content"?: string;
    /**
     * 水印添加强度，强度越高，加水印后的图像抵抗攻击性能越强，但引起的失真越明显，默认值为low，可取值为[low, medium, high]。
     * @example `low`
     */
    "StrengthLevel"?: string;
    /**
     * 仅输入图片格式为jpg时生效。
     * 携带水印信息的输出图片的存储质量，默认值为90，取值范围为70~100。
     * 质量越高，图片尺寸越大，水印解析质量越高。
     * @example `90`
     */
    "ImageQuality"?: number;
}
