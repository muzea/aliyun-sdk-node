export interface CreateEditingProjectRequest {
    /**
     * 云剪辑工程标题
     * @example `example`
     */
    "Title": string;
    /**
     * 云剪辑工程描述
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 云剪辑工程时间线，Json格式
     * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}`
     */
    "Timeline"?: string;
    /**
     * 云剪辑工程封面。
     * @example `https://example.com/example.png`
     */
    "CoverURL"?: string;
    /**
     * 模板Id，用于快速低门槛的构建时间线。注：Timeline、TemplateId有且只有一个非空。当TemplateId不为空时，ClipsParam不能为空。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 模板对应的素材参数，Json格式，当TemplateId不为空时，ClipsParam不能为空。具体格式见 [普通模板创建及使用](https://help.aliyun.com/document_detail/328557.html)、[高级模板创建及使用](https://help.aliyun.com/document_detail/291418.html)。
     * @example `见模板使用文档`
     */
    "ClipsParam"?: string;
    /**
     * 模板类型，创建基于模板的云剪辑工程需要填写，默认值：Timeline。
     * 取值范围：
     * - Timeline 普通模板
     * - VETemplate 高级模板
     * @example `Timeline`
     */
    "TemplateType"?: string;
    /**
     * 工程关联素材，多个素材以逗号（,）分隔；每种类型最多支持10个素材ID.
     * @example `{"video":"*****2e057304fcd9b145c5cafc*****", "image":"****8021a8d493da643c8acd98*****,*****cb6307a4edea614d8b3f3c*****", "liveStream": "[{\"appName\":\"testrecord\",\"domainName\":\"test.alivecdn.com\",\"liveUrl\":\"rtmp://test.alivecdn.com/testrecord/teststream\",\"streamName\":\"teststream\"}]", "editingProject": "*****9b145c5cafc2e057304fcd*****"}`
     */
    "MaterialMaps"?: string;
    /**
     * 工程业务配置。一般剪辑工程可忽略。
     * 如果是直播剪辑工程OutputMediaConfig.StorageLocation 必填, OutputMediaConfig.Path 不填默认合成的直播片段存储在根路径下
     * OutputMediaTarget 可选填vod-media/oss-object, 不填默认oss-object
     * OutputMediaTarget 为vod-media 时，Path不生效。
     * @example `{ "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }`
     */
    "BusinessConfig"?: string;
    /**
     * 剪辑工程类型，EditingProject: 普通剪辑工程；LiveEditingProject: 直播剪辑工程
     * @example `LiveEditingProject`
     */
    "ProjectType"?: string;
}
