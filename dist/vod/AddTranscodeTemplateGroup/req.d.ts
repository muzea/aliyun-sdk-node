export interface AddTranscodeTemplateGroupRequest {
    /**
     * 转码模板组名称。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * > TranscodeTemplateGroupId和Name必须传递一个。
     * @example `transcodetemplate`
     */
    "Name"?: string;
    /**
     * 转码模板配置信息（JSON字符串）。参数结构详情，请参见[TranscodeTemplate](~~52839~~)。
     * >- 该参数不传递，则不会构建转码处理流程，视频上传不会触发转码。
     * >- 如果不需要设置Width或者Height属性，则不传相应属性即可，请不要设置为空串，例如："Height":""。
     * @example `[{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30","Height":360,"Width":640},"Definition":"SD","Container":{"Format":"mp4"},"TemplateName":"testName","MuxConfig":{},"Audio":{"Codec":"AAC","Bitrate":"64","Samplerate":"44100"}}]`
     */
    "TranscodeTemplateList"?: string;
    /**
     * 转码模板组ID。若指定了转码模板组ID，则可向指定的模板组中添加新的转码模板。
     * > TranscodeTemplateGroupId和Name必须传递一个。
     * @example `4c71a339fe52b4fa6f4527****`
     */
    "TranscodeTemplateGroupId"?: string;
    /**
     * 应用ID。默认取值： **app-1000000**。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
