export interface CreateMediaConvertTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 媒体文件列表。若列表元素大于1个则表示开启Concat（拼接）功能，Concat顺序为输入视频文件URI的顺序。
     */
    "Sources": {
        /**
         * OSS地址规则为`oss://${Bucket}/${Object}`，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
        /**
         * 媒体转码开始时间，单位为秒。取值范围如下：
         * - 0（默认）：从媒体起始时间开始转码。
         * - n（大于0）：从媒体起始时间n秒后开始转码。
         * @example `0`
         */
        StartTime: number;
        /**
         * 媒体转码时长。单位为秒，默认值为0，表示到视频结束时间。
         * @example `0`
         */
        Duration: number;
        /**
         * 添加字幕列表，默认为空。
         */
        Subtitles: {
            /**
             * OSS地址规则为`oss://${Bucket}/${Object}`，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
             * 支持的字幕格式为：srt，vtt，mov_text，ass，dvd_sub，pgs。
             * @example `oss://test-bucket/test-object
            `
             */
            URI: string;
            /**
             * 字幕延迟时间，单位为秒，默认为0。
             * @example `10.5`
             */
            TimeOffset: number;
            /**
             * 字幕语言，参考标准为ISO 639-2，默认为空。
             * @example `eng`
             */
            Language: string;
        }[];
    }[];
    /**
     * 媒体处理任务列表，支持配置多任务。
     */
    "Targets": {
        /**
         * 媒体转码输出文件的OSS地址。
         * OSS地址规则为`oss://${Bucket}/${Object}`，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * - 当**URI**存在拓展名时转码输出的媒体文件OSS地址均为**URI**，若输出文件为多个会存在覆盖的情况。
         * - 当**URI**不存在拓展名时转码输出的媒体文件OSS地址由**URI**、**Container**与**Segment**参数共同决定，例如**URI**为`oss://examplebucket/outputVideo`：
         *    -  当**Container**为`mp4`，**Segment**为空时，生成媒体文件的OSS地址为`oss://examplebucket/outputVideo.mp4`。
         *    -  当**Container**为`ts`，**Segment**中**Format**为`hls`时，将产生OSS地址为`oss://examplebucket/outputVideo.m3u8`的m3u8文件以及多个拥有`oss://examplebucket/outputVideo`前缀的ts文件。
         * @example `oss://test-bucket/test-target-object.mp4`
         */
        URI: string;
        /**
         * 媒体容器类型。可选容器类型如下：
         * - 音视频容器：mp4、mkv、mov、asf、avi、mxf、ts、flv
         * - 音频容器：mp3、aac、flac、oga、ac3、opus
         * ><notice>Container与URI参数需要同时设置。若只进行字幕提取，截帧，截雪碧图或媒体转动图，则需要将Container与URI同时设为空值，此时设置的Segment，Video，Audio和Speed等参数无意义。
         * @example `mp4`
         */
        Container: string;
        /**
         * 媒体倍速播放设置，取值范围为\[0.5,2]，默认为1.0。
         * > 转码后媒体文件与源媒体文件默认播放速度的比值，非倍速转码。
         * @example `1.0`
         */
        Speed: number;
        /**
         * 媒体切片设置，默认不进行切片。
         */
        Segment: {
            /**
             * 媒体切片方式。取值范围如下：
             * - hls
             * - dash
             * @example `hls`
             */
            Format: string;
            /**
             * 切片长度。单位为秒。
             * @example `30`
             */
            Duration: number;
            /**
             * 起始序号，仅支持hls，默认为0。
             * @example `5`
             */
            StartNumber: number;
        };
        /**
         * 视频处理参数配置。
         * ><notice>当Video为空值时，会将第一路视频流（若存在）直接拷贝到输出文件。
         */
        Video: any;
        /**
         * 音频处理参数配置。
         * ><notice>当Audio为空值时，会将第一路音频流（若存在）直接拷贝到输出文件。
         */
        Audio: any;
        /**
         * 字幕处理参数配置。
         * ><notice>当Subtitle为空值时，会将第一路字幕流（若存在）直接拷贝到输出文件。
         */
        Subtitle: any;
        /**
         * 截帧，截雪碧图，媒体转动图参数配置。
         */
        Image: any;
        /**
         * 去除媒体文件metadata，如`title`、`album`等，默认为false。
         */
        StripMetadata: boolean;
    }[];
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}`
     */
    "UserData"?: string;
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{"test":"val1"}`
     */
    "Tags"?: any;
    /**
     * 链式授权配置。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
    /**
     * 在进行媒体拼接时，主媒体文件（提供`Video`、`Audio`中默认转码参数，包括分辨率、帧率等）在拼接列表中的序号，默认为0（对齐拼接列表中第一个媒体文件）。
     */
    "AlignmentIndex"?: number;
}
