export interface CreateMeetingTransRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 管控台创建的项目AppKey。
         * @example `JV1sRTisRMi****`
         */
        AppKey: string;
        /**
         * 用户设置的会议标识，在会中查询或会后结束回调时会原样返回。
         * @example `meeting_123`
         */
        MeetingKey: string;
        /**
         * 音频编码格式，PCM（无压缩的PCM文件或WAV文件）或OPUS（压缩的OPUS文件）。
         * @example `pcm`
         */
        AudioFormat: string;
        /**
         * 音频打包方式，基于听悟约定的Protobuf格式封装多路音频流时设置为multi。
         * @example `multi`
         */
        AudioPackage: string;
        /**
         * 音频采样率，当前支持：16000、8000（仅支持单路中文）。
         * @example `16000`
         */
        AudioSampleRate: number;
        /**
         * 会议上传音频采样位数，当前支持：16。
         * @example `16`
         */
        AudioBitRate: number;
        /**
         * 音频转写使用的语言模型。
         * cn：中文。
         * en：英文。
         * yue：粤语。
         * fspk：中英文自由说。
         * @example `cn`
         */
        AudioLanguage: string;
        /**
         * 是否开启会中实时结果返回，默认是true。
         * @example `true`
         */
        RealtimeResultEnabled: boolean;
        /**
         * 开启会中实时结果返回时，设置识别结果返回等级，默认是1。
         * 0：不返回识别结果。
         * 1：识别出完整句子时返回识别结果。
         * 2：识别出中间结果及完整句子时返回识别结果。
         * @example `2`
         */
        RealtimeResultLevel: number;
        /**
         * 开启会中实时结果返回且音频打包方式为multi时，设置发言人识别结果返回等级，默认是1。
         * 0：不返回识别结果。
         * 1：识别出完整句子时返回识别结果。
         * 2：识别出中间结果及完整句子时返回识别结果。
         * @example `2`
         */
        RealtimeActiveResultLevel: number;
        /**
         * 是否开启mp3格式音频同步转码，默认是false。
         * @example `false`
         */
        AudioOutputEnabled: boolean;
        /**
         * 开启音频同步转码时，转码音频写入到的OSS Bucket，需要与管控台项目配置的OSS Bucket一致。
         * @example `bucket`
         */
        AudioOutputOssBucket: string;
        /**
         * 开启音频同步转码时，转码音频写入到的OSS文件路径，需要以"tingwu/"为前缀。
         * @example `tingwu/dir/filename`
         */
        AudioOutputOssPath: string;
        /**
         * 是否开启会后智能提取，默认是false。
         * @example `false`
         */
        MeetingResultEnabled: boolean;
        /**
         * 开启会后智能提取时，提取结果写入到的OSS Bucket，需要与管控台项目配置的OSS Bucket一致。
         * @example `bucket`
         */
        MeetingResultOssBucket: string;
        /**
         * 开启会后智能提取时，提取结果写入到的OSS文件路径，需要以"tingwu/"为前缀。
         * @example `tingwu/dir/filename`
         */
        MeetingResultOssPath: string;
        /**
         * 开启会后智能提取时，是否会中识别结果写入，默认是false。
         * @example `false`
         */
        DocResultEnabled: boolean;
        /**
         * 开启会后智能提取时，是否开启有效音频片断检测结果写入，默认是false。
         * @example `false`
         */
        AudioSegmentsEnabled: boolean;
        /**
         * 是否开启会中翻译，默认是false。
         * @example `false`
         */
        TranslateResultEnabled: boolean;
        /**
         * 翻译目标语言集合，多个语言间用英文逗号","分隔，当前支持cn、en。
         * @example `cn,en`
         */
        TranslateLanguages: string;
        /**
         * 单通道识别或多通道mix流识别结果翻译等级。0：不返回翻译结果。1：识别出完整句子时返回翻译结果。2：识别出中间结果及完整句子时返回翻译结果。默认是1。
         * @example `2`
         */
        TranslateResultLevel: number;
        /**
         * 多通道Active流识别结果翻译等级。0：不返回翻译结果。 1：识别出完整句子时返回翻译结果。 2：识别出中间结果及完整句子时返回翻译结果。默认是1。
         * @example `2`
         */
        TranslateActiveResultLevel: number;
        /**
         * 会中识别消息是否包含words信息，默认是true。
         * @example `true`
         */
        RealtimeResultWordsEnabled: boolean;
        /**
         * 会中识别消息结果header中是否包含MeetingKey、MeetingId，默认是false。
         * @example `true`
         */
        RealtimeResultMeetingInfoEnabled: boolean;
        /**
         * 系统扩展：标签
         */
        Tags: any;
        /**
         * ASR转写的额外参数，如热词vocabulary_id
         * @example `{
          "vocabulary_id": "e2a9a9be3128417fb4d181ebfbe8****"
        }`
         */
        AsrParams: any;
        /**
         * 系统扩展：实验转写参数
         */
        LabParams: any;
        /**
         * 能力扩展
         */
        AbilityParams: any;
    };
}
