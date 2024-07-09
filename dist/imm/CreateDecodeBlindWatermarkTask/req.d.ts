export interface CreateDecodeBlindWatermarkTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 图片的OSS地址。
     * OSS地址规则为`oss://<bucket>/<object>`，其中`<bucket>`为和当前项目处于同一地域的OSS Bucket名称，`<object>`为包含文件扩展名的文件完整路径。
     * @example `oss://target/sampleobject.jpg`
     */
    "SourceURI": string;
    /**
     * 水印添加强度，强度越高，加水印后的图像抵抗攻击性能越强，但引起的失真越明显，默认值为low，可取值为[low, medium, high]。
     * @example `low`
     */
    "StrengthLevel"?: string;
    /**
     * 嵌入的水印类型，可选值：text
     * （图片水印类型暂不支持，因此当前只能为text）
     * @example `text`
     */
    "WatermarkType"?: string;
    /**
     * 旧版盲水印[DecodeBlindWatermark](~~444166~~)接口中的参数，解析盲水印后图片保存到的 OSS URI。
     * OSS地址规则为`oss://<bucket>/<object>`，其中`<bucket>`为和当前项目处于同一地域的OSS Bucket名称，`<object>`为包含文件扩展名的文件完整路径。
     * @example `oss://target/targetobject.jpg`
     */
    "TargetURI"?: string;
    /**
     * 旧版盲水印[DecodeBlindWatermark](~~444166~~)接口中的参数，输出图片的质量，默认值为90，取值范围为70~100。
     * 质量越高，图片尺寸越大，水印解析质量越高
     * @example `90`
     */
    "ImageQuality"?: number;
    /**
     * 旧版盲水印[DecodeBlindWatermark](~~444166~~)接口中的参数，水印算法模型，可选值包括FFT、FFT_FULL、DWT和DWT_IBG，其中默认参数为 FFT。
     * 当参数为空时，表示新版，否则，则认为是旧版
     * @example `FFT`
     */
    "Model"?: string;
    /**
     * 旧版盲水印[DecodeBlindWatermark](~~444166~~)接口中的参数，添加盲水印前图片的OSS URI。
     * 当Model参数为DWT和DWT_IBG时无需设置此参数。
     * OSS地址规则为oss://${bucket}/${object}，其中${bucket}为和当前项目处于同OSS地址规则为`oss://<bucket>/<object>`，其中`<bucket>`为和当前项目处于同一地域的OSS Bucket名称，`<object>`为包含文件扩展名的文件完整路径。
     * @example `oss://imm-test/testcases/watermarktestbefore.jpg`
     */
    "OriginalImageURI"?: string;
    /**
     * 消息通知配置，详细内容请单击 Notification 查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
