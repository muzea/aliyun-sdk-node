export interface CreateFileTransRequest {
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
         * 用户设置的任务标识，在任务查询或任务结束回调时会原样返回。
         * @example `trans_123`
         */
        TransKey: string;
        /**
         * 需要转写音频所在的OSS Bucket。
         * @example `bucket`
         */
        AudioOssBucket: string;
        /**
         * 需要转写音频所在的OSS文件路径或者自定义可下载文件地址（http|https）。如果AudioOssBucket非空，则需要赋值OSS文件路径（...../*.mp3）；如果AudioOssBucket为空，则需要赋值自定义可下载文件地址（http://……/*.mp3）。
         * @example `dir1/dir2/filename
        http://……/*.mp3`
         */
        AudioOssPath: string;
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
         * 是否开启说话人角色区分。注，只对16K及以上采样率生效。
         * 不设置：不使用说话人角色区分。
         * 0：说话人角色区分结果为不定人数。
         * 2：说话人角色区分结果为2人。
         * @example `2`
         */
        AudioRoleNum: string;
        /**
         * 是否开启mp3格式音频转码，默认是false。
         * @example `false`
         */
        AudioOutputEnabled: boolean;
        /**
         * 开启音频转码时，转码音频写入到的OSS Bucket，需要与管控台项目配置的OSS Bucket一致。
         * @example `bucket`
         */
        AudioOutputOssBucket: string;
        /**
         * 开启音频转码时，转码音频写入到的OSS文件路径，需要以"tingwu/"为前缀。
         * @example `tingwu/dir/filename`
         */
        AudioOutputOssPath: string;
        /**
         * 是否开启视频转码，默认是false。
         * @example `false`
         */
        VideoOutputEnabled: boolean;
        /**
         * 开启视频转码时，转码视频写入到的OSS Bucket，需要与管控台项目配置的OSS Bucket一致。
         * @example `bucket`
         */
        VideoOutputOssBucket: string;
        /**
         * 开启视频转码时，转码视频写入到的OSS文件路径，需要以"tingwu/"为前缀。
         * @example `tingwu/dir/filename
        `
         */
        VideoOutputOssPath: string;
        /**
         * 识别及智能提取结果写入到的OSS Bucket，需要与管控台项目配置的OSS Bucket一致。
         * @example `bucket`
         */
        TransResultOssBucket: string;
        /**
         * 识别及智能提取结果写入到的OSS文件路径，需要以"tingwu/"为前缀。
         * @example `tingwu/dir/filename`
         */
        TransResultOssPath: string;
        /**
         * 是否开启有效音频片断检测结果写入，默认是false。
         * @example `false`
         */
        AudioSegmentsEnabled: boolean;
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
