export interface SubmitMediaCensorJobRequest {
    /**
     * 待审核的媒体文件OSS地址，支持视频文件、音频文件。可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取。如需要审核图片文件请使用`CoverImage`参数传入。JSON对象，更多信息请参考参数详情中[Input详情](~~29253~~)参数。
     * - Bucket：输入文件OSS Bucket名称。
     * - Location：OSS区域，必须和MPS服务所在区域一致。
     * - Object：待检测OSS Object。
     *     > Object不能以斜杠（/）开头，否则会导致接口调用失败。
     * @example `{"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.flv"}`
     */
    "Input"?: string;
    /**
     * 封面图片的OSS文件，可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取。最多支持5个封面图片，JSON数组。
     * - Bucket：输入文件OSS Bucket名称。
     * - Location：OSS区域，必须和MPS服务所在区域一致。
     * - Object：待检测OSS Object。
     *     > Object不能以斜杠（/）开头，否则会导致接口调用失败。
     * @example `[{"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.jpeg"}]`
     */
    "CoverImages"?: string;
    /**
     * 视频标题，最大长度64个字节。
     * @example `Hello World`
     */
    "Title"?: string;
    /**
     * 视频介绍，最大长度128个字节。
     * @example `example description`
     */
    "Description"?: string;
    /**
     * 字符串。
     * @example `hello world`
     */
    "Barrages"?: string;
    /**
     * 管道ID，用于绑定消息通知。可以通过**MPS控制台** > **全局设置** > **管道**获取。可填空字符串（""），表示使用默认的管道执行任务。默认管道并发为10，需要提升并发数请提交<props="china">[工单](https://selfservice.console.aliyun.com/ticket/category/mts/recommend/1186)</props><props="intl">[工单](https://workorder-intl.console.aliyun.com/?spm=5176.12246746.top-nav.ditem-sub.35da7bbcitpQnr#/ticket/createIndex)</props>。
     * > 管道目前仅支持后台创建，相关查询、更新接口请参见[更新管道](~~188374~~)。
     * @example `b22c173cced04565b1f38f1ecc39****`
     */
    "PipelineId"?: string;
    /**
     * 视频审核配置和输出截图的OSS地址。可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取。
     * JSON对象。
     * - OutputFile：
     *     - Bucket：输出文件OSS Bucket名字。
     *     - Location：OSS区域，必须和MPS服务所在区域一致。
     *     - Object: 待检测OSS Object，其中{Count}为截帧图片序号替换符。
     *    其中，审核结果详细信息保存在OutputFile相同的文件夹下，命名为{jobId}.output，output文件具体字段格式，请参见[媒体审核结果文件字段](~~609186~~)。
     * - StoreVideoTimeline: 审核是否要输出`{jobId}.video_timeline`文件，存储在OSS中。true：表示要输出，false表示不输出，不填默认不输出。文件格式，请参见，[查询媒体作业（videoTimeline示例）](~~91779~~)。
     * - SaveType：输出模式。abnormal表示只输出有问题的截帧，all表示输出所有截帧。
     * - Biztype：表示审核模版。common为默认模版，不填默认为common，如果需要自定义审核模版需要提工单，然后将用户的uid填入此项。
     * - Scene：检测场景。Scenes可以选择检测场景，不填默认检测暴恐和涉黄。可选场景：
     *     - porn：涉黄
     *     - terrorism：暴恐
     *     - ad：图文违规
     *     - live：不良场景
     *     - logo：图标
     *     - audio：语音反垃圾
     *  >对于有音频轨道的输入文件，audio场景会进行音频审核，没有音轨的输入文件不要填写audio。
     * @example `{"Scenes" : ["porn"], "OutputFile":{"Bucket": "example-001","Location": "oss-cn-hangzhou","Object": "test/example-{Count}.jpg"},"SaveType" : "abnormal","BizType":"common"}`
     */
    "VideoCensorConfig": string;
    /**
     * 用户自定义数据，最大长度128个字节。
     * @example `UserDatatestid-001-****`
     */
    "UserData"?: string;
    /**
     * 视频的URL链接。
     * @example `http://www.example.com/video-****​/test-****.mp4`
     */
    "ExternalUrl"?: string;
}
