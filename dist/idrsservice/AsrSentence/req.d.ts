export interface AsrSentenceRequest {
    /**
     * 任务请求参数
     */
    "AsrRequest"?: {
        /**
         * 应用 ID
         * @example `d61be709-49d2-4cf1-b219-cd6181f72db8`
         */
        AppId: string;
        /**
         * 可访问的文件 URL
         * @example `http://shuanglu-record-finance.oss-cn-shanghai.aliyuncs.com/record/4x5avhil/047730_30307_0/2022-02-12-10-20****`
         */
        FileUrl: string;
        /**
         * 音频编码格式，默认值：PCM。
         * 支持格式：PCM编码、16bit采样位数、单声道
         * @example `PCM`
         */
        Format: string;
        /**
         * 音频采样率，默认值：16000 Hz。
         * @example `16000`
         */
        SampleRate: number;
        /**
         * 是否在后处理中添加标点，默认值：False。
         * @example `false`
         */
        EnablePunctuationPrediction: boolean;
        /**
         * 是否在后处理中执行ITN（逆文本规整，inverse text normalization）。设置为True时，中文数字将转为阿拉伯数字输出，默认值：False。
         * @example `false`
         */
        EnableInverseTextNormalization: boolean;
        /**
         * 是否启动语音检测。默认值：False。
         * @example `false`
         */
        EnableVoiceDetection: boolean;
    };
}
