export interface SubmitMediaProducingJobRequest {
    /**
     * 剪辑工程ld。
     * ><notice>必须填写ProgectId、Timeline、TempalteId三个参数中的一个，剩余两个参数填写为空。></notice>
     * @example `xxxxxfb2101cb318xxxxx`
     */
    "ProjectId"?: string;
    /**
     * 云剪辑任务时间线。具体结构定义，请参见[Timeline配置说明](https://help.aliyun.com/document_detail/198823.htm?spm=a2c4g.11186623.2.5.92447a40M5rR1I#topic-2024662)。><notice>必须填写ProgectId、Timeline、TempalteId三个参数中的一个，剩余两个参数填写为空。></notice>
     * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}`
     */
    "Timeline"?: string;
    /**
     * 模板Id，用于快速低门槛的构建时间线。><notice>必须填写ProgectId、Timeline、TempalteId三个参数中的一个，剩余两个参数填写为空。
     * 当TemplateId不为空时，ClipsParam不能为空。></notice>
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 模板对应的素材参数，Json格式，当TemplateId不为空时，ClipsParam不能为空。具体格式见 [普通模板创建及使用](https://help.aliyun.com/document_detail/328557.html)、[高级模板创建及使用](https://help.aliyun.com/document_detail/291418.html)。
     * @example `见模板使用文档`
     */
    "ClipsParam"?: string;
    /**
     * 剪辑工程的元数据信息，Json格式。具体结构定义参见[ProjectMetadata](https://help.aliyun.com/document_detail/357745.html#title-yvp-81k-wff)。
     * @example `{"Description":"剪辑视频描述","Title":"剪辑标题测试"}`
     */
    "ProjectMetadata"?: string;
    /**
     * 输出成品的目标类型。取值：
     * - oss-object（客户在阿里云oss bucket下的oss object）
     * - vod-media（阿里云vod的媒资）
     * @example `oss-object`
     */
    "OutputMediaTarget"?: string;
    /**
     * 输出成品的目标配置，Json格式。可以设置输出成品的在OSS 上的URL，或者VOD Bucket 中的存储位置。
     * 输出到OSS时，输出目标的 MediaURL 必填；输出到VOD 时，StorageLocation 和 FileName 两个参数必填。
     * [OutputMediaConfig 参数示例](https://help.aliyun.com/document_detail/357745.html#title-4j6-ve7-g31)。
     * @example `{"MediaURL":"https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4"}`
     */
    "OutputMediaConfig": string;
    /**
     * 自定义设置，Json格式，长度限制为512字节。支持[自定义回调地址配置](~~451631~~)。
     * @example `{"NotifyAddress":"http://xx.xx.xxx"}或{"NotifyAddress":"https://xx.xx.xxx"}或{"NotifyAddress":"ice-callback-demo"}`
     */
    "UserData"?: string;
    /**
     * 保证请求幂等性。
     * @example `****12e8864746a0a398****`
     */
    "ClientToken"?: string;
    /**
     * 剪辑合成请求来源，取值范围：
     * - OpenAPI：API 直接请求。
     * - AliyunConsole：请求来自于阿里云控制台。
     * - WebSDK：请求来自于集成了WebSDK的前端页面。
     * @example `OPENAPI`
     */
    "Source"?: string;
    /**
     * 剪辑合成参数， [参数详情](https://help.aliyun.com/document_detail/357745.html#title-10z-t9u-n69)。
     * - AutoRegisterInputVodMedia：是否需要将您时间线中的VOD媒资自动注册至IMS，默认为true。
     * - OutputWebmTransparentChannel: 是否需要输出视频带透明通道，默认为false。
     * - CoverConfig: 自定义封面图参数。
     * - 等......
     * @example `{
          "AutoRegisterInputVodMedia": "true",
          "OutputWebmTransparentChannel": "true"
    }`
     */
    "EditingProduceConfig"?: string;
    /**
     * 合成视频的元数据，JSON格式。具体结构定义，请参见[MediaMetadata](https://help.aliyun.com/document_detail/357745.html?spm=a2c4g.445712.0.0.49a716dbA8hgdz#97ff26d0e3c28)。
     * @example `{
          "Title":"test-title",
          "Tags":"test-tags1,tags2"
    }`
     */
    "MediaMetadata"?: string;
}
